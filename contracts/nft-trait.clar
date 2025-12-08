;; File: contracts/nft-trait.clar
;; Ini adalah Buku Peraturan standar NFT di Stacks (SIP-009)

(define-trait nft-trait
  (
    ;; Setiap NFT wajib punya 4 fitur ini:
    (get-last-token-id () (response uint uint))
    (get-token-uri (uint) (response (optional (string-ascii 256)) uint))
    (get-owner (uint) (response (optional principal) uint))
    (transfer (uint principal principal) (response bool uint))
  )
)