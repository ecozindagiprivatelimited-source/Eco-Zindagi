/** Products currently available to buy — all others show as Coming Soon */

export const PURCHASABLE_SLUGS = [
  'EcoBuck',
  'activated-carbon-filter',
  'odorguard-cartridge',
] as const

export type PurchasableSlug = (typeof PURCHASABLE_SLUGS)[number]

export function isProductPurchasable(slug: string): boolean {
  return (PURCHASABLE_SLUGS as readonly string[]).includes(slug)
}
