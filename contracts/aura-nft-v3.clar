;; File: contracts/aura-nft-v3.clar
;; Bitcoin Aura NFT v3 - With BTC Address Linking
;; Each token stores which Bitcoin address it represents

;; Trait binding (SIP-009)
(use-trait nft-trait .nft-trait.nft-trait)

(impl-trait .nft-trait.nft-trait)

;; --- STORAGE ---

(define-non-fungible-token bitcoin-aura-v3 uint)

(define-data-var last-token-id uint u0)

;; Base URI fallback (collection-level metadata JSON)
(define-constant base-uri "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/metadata/collection.json")

;; Token ID -> aura label (short ASCII)
(define-map aura-metadata uint (string-ascii 20))

;; Token ID -> metadata URI (per-token)
(define-map token-uri uint (string-ascii 256))

;; NEW: Token ID -> Bitcoin address that was scanned
(define-map btc-address uint (string-ascii 64))

;; NEW: Bitcoin address -> Token ID (reverse lookup)
(define-map btc-to-token (string-ascii 64) uint)

;; Optional minter gate. When set, only that principal can mint.
(define-data-var minter (optional principal) none)

;; --- HELPERS ---

(define-private (assert-mint-allowed)
  (match (var-get minter)
    minter-principal (if (is-eq tx-sender minter-principal) (ok true) (err u401))
    (ok true)
  )
)

;; --- MINTING ---

;; MODIFIED: Mint now requires the Bitcoin address being claimed
(define-public (mint (btc-addr (string-ascii 64)) (aura-type (string-ascii 20)) (metadata-uri (string-ascii 256)))
  (begin
    (try! (assert-mint-allowed))
    ;; Check if this BTC address already has a token
    (asserts! (is-none (map-get? btc-to-token btc-addr)) (err u409)) ;; 409 = Conflict/Already exists
    (let ((token-id (+ (var-get last-token-id) u1)))
      (begin
        (try! (nft-mint? bitcoin-aura-v3 token-id tx-sender))
        (map-set btc-address token-id btc-addr)
        (map-set btc-to-token btc-addr token-id)
        (map-set aura-metadata token-id aura-type)
        (map-set token-uri token-id metadata-uri)
        (var-set last-token-id token-id)
        (ok token-id)
      ))))

;; --- SIP-009 REQUIRED ---

(define-read-only (get-last-token-id)
    (ok (var-get last-token-id))
)

(define-read-only (get-token-uri (token-id uint))
    (let ((maybe-uri (map-get? token-uri token-id)))
        (if (is-some maybe-uri)
            (ok maybe-uri)
            (ok (some base-uri))
        ))
)

(define-read-only (get-owner (token-id uint))
    (ok (nft-get-owner? bitcoin-aura-v3 token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) (err u101))
        (nft-transfer? bitcoin-aura-v3 token-id sender recipient)
    )
)

;; --- EXTRA VIEWS ---

(define-read-only (get-aura (token-id uint))
    (ok (map-get? aura-metadata token-id))
)

;; NEW: Get Bitcoin address for a token
(define-read-only (get-btc-address (token-id uint))
    (ok (map-get? btc-address token-id))
)

;; NEW: Get token ID for a Bitcoin address (reverse lookup)
(define-read-only (get-token-by-btc (btc-addr (string-ascii 64)))
    (ok (map-get? btc-to-token btc-addr))
)

;; --- ADMIN ---

;; If unset, first caller sets it. If set, only current minter can rotate.
(define-public (set-minter (new-minter principal))
  (match (var-get minter)
    current-minter
      (begin
        (asserts! (is-eq tx-sender current-minter) (err u403))
        (var-set minter (some new-minter))
        (ok true)
      )
    (begin
      (var-set minter (some new-minter))
      (ok true)
    )
  )
)

(define-read-only (get-minter)
  (ok (var-get minter))
)

;; --- DYNAMIC AURA UPDATE ---

;; MODIFIED: Update aura for a Bitcoin address (must be token owner)
(define-public (update-aura (btc-addr (string-ascii 64)) (new-aura-type (string-ascii 20)) (new-metadata-uri (string-ascii 256)))
  (let ((token-id (unwrap! (map-get? btc-to-token btc-addr) (err u404))))
    (let ((owner (unwrap! (nft-get-owner? bitcoin-aura-v3 token-id) (err u404))))
      (begin
        (asserts! (is-eq tx-sender owner) (err u403))
        (map-set aura-metadata token-id new-aura-type)
        (map-set token-uri token-id new-metadata-uri)
        (ok true)
      )
    )
  )
)
