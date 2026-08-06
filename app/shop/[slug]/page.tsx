'use client'

import { getProductBySlug, products } from '@/lib/product-data'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { useCart } from '@/lib/cart-context'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useCurrency } from '@/lib/currency-context'
import { isProductPurchasable } from '@/lib/product-availability'
import { cn } from '@/lib/utils'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  const { formatPrice } = useCurrency()

  const [showAddedMessage, setShowAddedMessage] = useState(false)

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Product Not Found</h1>
            <Link href="/shop" className="text-accent hover:text-accent/80 transition-colors">
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const purchasable = isProductPurchasable(product.slug)
  const handleAddToCart = () => {
    if (!purchasable) return

    addToCart(product, 1)

    setShowAddedMessage(true)
    setTimeout(() => setShowAddedMessage(false), 2000)
  }
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <section className="py-4 px-4 sm:px-6 lg:px-8 border-b border-border bg-card/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/shop" className="hover:text-foreground transition-colors">
                Shop
              </Link>
              <span>/</span>
              <Link
                href={`/shop?category=${product.category}`}
                className="hover:text-foreground transition-colors capitalize"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="sticky top-24 h-fit max-lg:static"
              >
                <div className="relative h-72 rounded-2xl glass overflow-hidden sm:h-96 md:h-[420px] lg:h-[500px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={cn('object-contain p-6', !purchasable && 'opacity-75 blur-[1px]')}
                    priority
                  />
                  {!purchasable && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-[3px]">
                      <span className="rounded-full border border-white/80 bg-white/95 px-5 py-2 text-sm font-bold uppercase tracking-wider text-primary shadow-lg">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-8"
              >
                {/* Header */}
                <div>
                  <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                    {product.category}
                  </p>
                  <h1 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">{product.name}</h1>
                  <p className="text-lg text-muted-foreground">{product.description}</p>
                </div>

                {/* Price & Impact */}
                <div className="space-y-4 border-t border-b border-border py-6">
                  <div className="flex items-baseline gap-4">
                    <p className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
                      {purchasable ? formatPrice(product.price) : 'Coming Soon'}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg text-sm font-medium">
                      Impact Score: {product.ecoScore}%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {purchasable ? (
                        product.inStock ? (
                          <span className="text-green-600 dark:text-green-400">In Stock</span>
                        ) : (
                          <span className="text-red-600">Out of Stock</span>
                        )
                      ) : (
                        <span className="font-medium text-primary">Launching soon</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Long Description */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">About This Product</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.longDescription}
                  </p>
                </div>

                {/* Specifications */}
                {product.specs && product.specs.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-4 text-lg">Specifications</h3>
                    <ul className="space-y-3">
                      {product.specs.map((spec, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 text-muted-foreground"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {purchasable ? (
                  <div className="w-full space-y-4">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="w-full rounded-2xl bg-accent py-5 text-lg font-semibold text-accent-foreground transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {showAddedMessage ? "✓ Added to Cart" : "Add to Cart"}
                    </button>

                    <Link
                      href="/prebook"
                      className="flex w-full items-center justify-center rounded-2xl bg-primary py-5 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
                    >
                      Book Now
                    </Link>
                  </div>
                ) : (
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
                    <p className="text-sm font-semibold text-foreground">
                      This product is not available yet
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      We&apos;re launching soon. Shop EcoBuck and filter refills today.
                    </p>

                    <Link
                      href="/shop"
                      className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                    >
                      View available products →
                    </Link>
                  </div>
                )}

                {/* Shipping Info */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Shipping</p>
                    <p className="text-sm text-foreground">Free worldwide</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Warranty</p>
                    <p className="text-sm text-foreground">2-year guarantee</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-border">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={p} />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
