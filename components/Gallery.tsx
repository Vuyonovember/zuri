'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { ShoppingCart } from 'lucide-react'

const products = [
  {
    id: 0,
    key: 'beans',
    name: 'Tanzanian Single Origin Whole Bean',
    price: 'R149',
    image: '/beanbagimages/4A659F3F-9E19-49B8-8F5C-F40339314815.png',
    hoverImage: '/beanbagimages/E0135AA3-2EA2-4CB3-AF8B-94BB18DBFB88.png',
    description: '250g premium whole bean bag. Meticulously cultivated at 1400-1800m altitude.',
    featured: true,
  },
  {
    id: 1,
    key: 'black',
    name: 'Black Cold Brew Coffee',
    price: 'R39',
    image: '/product/8C66D2DB-9242-4F68-9E4B-BC113FE0E1E2.png',
    hoverImage: '/product/CEC87912-91D2-4901-B791-1920BB124FE3.png',
    description: 'Unsweetened Tanzanian single origin cold brew in a 250 ml can.',
  },
  {
    id: 2,
    key: 'latte',
    name: 'Latte Cold Brew Coffee',
    price: 'R45',
    image: '/product/FAED8486-8CB2-4804-8488-B0F7DC9040CC.png',
    hoverImage: '/product/1147BAD2-6ED6-49EA-942A-38BF656C72B9.png',
    description: 'Smooth and creamy Tanzanian single origin cold brew, 250 ml.',
  },
  {
    id: 3,
    key: 'mocha',
    name: 'Mocha Cold Brew Coffee',
    price: 'R49',
    image: '/product/03D3533E-211F-4DBA-9AE9-90025B666C13.png',
    hoverImage: '/product/51CFF409-51A4-4C5F-95E2-F631479F7816.png',
    description: 'Rich and chocolaty Tanzanian single origin cold brew, 250 ml.',
  },
  {
    id: 4,
    key: 'vanilla',
    name: 'Vanilla Cold Brew Coffee',
    price: 'R49',
    image: '/product/A1339123-C476-4B2F-BA6A-2F9AB1431293.png',
    hoverImage: '/product/5C7BC42D-6F9F-42C9-A744-6F4D6662D924.png',
    description: 'Naturally flavored vanilla Tanzanian single origin cold brew, 250 ml.',
  },
]

export default function Gallery() {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const goToProduct = (key: string) => {
    router.push(`/products/${key}`)
  }

  return (
    <section id="gallery" className="relative py-20 md:py-32 bg-gradient-to-b from-zuri-purple/70 via-zuri-black to-zuri-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs tracking-[0.25em] text-zuri-orange mb-2">ARTIFACTS DROP</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">COLLECTIBLE ARTIFACTS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Premium whole beans and cold brew cans that feel more like limited drops than products.
          </p>
        </motion.div>

        {/* Featured Product (Bean Bag) */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredId(0)}
            onMouseLeave={() => setHoveredId(null)}
            className="group cursor-pointer max-w-md mx-auto"
            onClick={() => goToProduct('beans')}
          >
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
              <Image
                src={hoveredId === 0 && products[0].hoverImage ? products[0].hoverImage : products[0].image}
                alt={products[0].name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {hoveredId === 0 && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToProduct('beans')
                  }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-zuri-orange text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-600 transition-colors"
                >
                  COMING SOON
                </motion.button>
              )}
            </div>

            <div className="space-y-2 text-center">
              <h3 className="text-lg font-bold text-white">{products[0].name}</h3>
              <p className="text-sm text-gray-400">{products[0].description}</p>
              <p className="text-xl font-bold text-zuri-orange">{products[0].price}</p>
            </div>
          </motion.div>
        </div>

        {/* Products Grid (teaser for full products page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.slice(1).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group cursor-pointer"
              onClick={() => goToProduct(product.key)}
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                <Image
                  src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {hoveredId === product.id && (
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToProduct(product.key)
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-zuri-orange text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 hover:bg-orange-600 transition-colors"
                  >
                    COMING SOON
                  </motion.button>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.description}</p>
                <p className="text-xl font-bold text-zuri-orange">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaser only: full ritual builder lives on /products */}
      </div>
    </section>
  )
}
