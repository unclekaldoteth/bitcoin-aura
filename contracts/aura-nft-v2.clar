;; File: contracts/aura-nft-v2.clar
;; Bitcoin Aura NFT v2 - With Dynamic Aura Updates

;; Trait binding (SIP-009)
(use-trait nft-trait .nft-trait.nft-trait)

(impl-trait .nft-trait.nft-trait)

;; --- STORAGE ---

(define-non-fungible-token bitcoin-aura-v2 uint)

(define-data-var last-token-id uint u0)

;; Base URI fallback (collection-level metadata JSON)
(define-constant base-uri "https://esolvhnpvfoavgycrwgy.supabase.co/storage/v1/object/public/bitcoin-aura/metadata/collection.json")

;; Token ID -> aura label (short ASCII)
(define-map aura-metadata uint (string-ascii 20))

;; Token ID -> metadata URI (per-token)
(define-map token-uri uint (string-ascii 256))

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

;; Mint. Input is a short aura label ("FIRE", "WATER", "STONE").
(define-public (mint (aura-type (string-ascii 20)) (metadata-uri (string-ascii 256)))
  (begin
    (try! (assert-mint-allowed))
    (let ((token-id (+ (var-get last-token-id) u1)))
      (begin
        (try! (nft-mint? bitcoin-aura-v2 token-id tx-sender))
        (map-set aura-metadata token-id aura-type)
        (map-set token-uri token-id metadata-uri)
        (var-set last-token-id token-id)
        (ok token-id)
      )))
)

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
    (ok (nft-get-owner? bitcoin-aura-v2 token-id))
)

(define-public (transfer (token-id uint) (sender principal) (recipient principal))
    (begin
        (asserts! (is-eq tx-sender sender) (err u101))
        (nft-transfer? bitcoin-aura-v2 token-id sender recipient)
    )
)

;; --- EXTRA VIEWS ---

(define-read-only (get-aura (token-id uint))
    (ok (map-get? aura-metadata token-id))
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

;; Update aura type for an existing token (owner-only)
(define-public (update-aura (token-id uint) (new-aura-type (string-ascii 20)) (new-metadata-uri (string-ascii 256)))
  (let ((owner (unwrap! (nft-get-owner? bitcoin-aura-v2 token-id) (err u404))))
    (begin
      (asserts! (is-eq tx-sender owner) (err u403))
      (map-set aura-metadata token-id new-aura-type)
      (map-set token-uri token-id new-metadata-uri)
      (ok true)
    )
  )
)
