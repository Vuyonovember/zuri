export type Product = {
  id: number
  key: string
  name: string
  price: string
  size: string
  tag: string
  image: string
  hoverImage?: string
  description: string
  vibe: string
  spec: string
  sensory: string
}

export const products: Product[] = [
  {
    id: 0,
    key: 'beans',
    name: 'TANZANIAN SINGLE ORIGIN WHOLE BEAN',
    price: 'R149',
    size: '250g bag',
    tag: 'PREMIUM · SINGLE ORIGIN',
    image: '/beanbagimages/4A659F3F-9E19-49B8-8F5C-F40339314815.png',
    hoverImage: '/beanbagimages/E0135AA3-2EA2-4CB3-AF8B-94BB18DBFB88.png',
    description: '250g premium whole bean bag. Meticulously cultivated at 1400-1800m altitude.',
    vibe: 'The cornerstone of the Zuri ecosystem. Pure coffee authority.',
    spec: '100% Premium Tanzanian Arabica Beans. Altitude: 1400m - 1800m above sea level. Varieties: Bourbon & Kent. Process: Fully Washed & Semi-Washed. Medium Roast.',
    sensory: 'The immediate sip opens with vibrant wild berry and crisp citrus. Delicate floral undertones soften the acidity. The finish features a heavy, velvety dark chocolate base note that lingers smoothly.',
  },
  {
    id: 1,
    key: 'black',
    name: 'BLACK (Unsweetened)',
    price: 'R39',
    size: '250 ml can',
    tag: 'ZERO SUGAR · ZERO MILK',
    image: '/product/8C66D2DB-9242-4F68-9E4B-BC113FE0E1E2.png',
    hoverImage: '/product/CEC87912-91D2-4901-B791-1920BB124FE3.png',
    description: 'Unsweetened Tanzanian single origin cold brew in a 250 ml can.',
    vibe: 'Raw power. No filters. No camouflage.',
    spec: '100% pure Tanzanian cold brew extract and filtered water. Zero sugar. Zero milk.',
    sensory:
      'Bold, dark cocoa foundation with a crisp, clean citrus finish that hits fast and leaves no bitter drag.',
  },
  {
    id: 2,
    key: 'mocha',
    name: 'MOCHA (Rich and Chocolaty)',
    price: 'R49',
    size: '250 ml can',
    tag: 'TANZANIAN CACAO · HIGH PERFORMANCE',
    image: '/product/03D3533E-211F-4DBA-9AE9-90025B666C13.png',
    hoverImage: '/product/51CFF409-51A4-4C5F-95E2-F631479F7816.png',
    description: 'Rich and chocolaty Tanzanian single origin cold brew, 250 ml.',
    vibe: 'Decadence meets high performance.',
    spec: 'Infused with premium Tanzanian single origin cacao with a balanced macro profile.',
    sensory:
      'Deep, velvet espresso colliding with rich, dark liquid chocolate. Indulgent and heavy bodied but hyper clean.',
  },
  {
    id: 3,
    key: 'vanilla',
    name: 'VANILLA (Naturally Flavored)',
    price: 'R49',
    size: '250 ml can',
    tag: 'REAL VANILLA PODS',
    image: '/product/A1339123-C476-4B2F-BA6A-2F9AB1431293.png',
    hoverImage: '/product/5C7BC42D-6F9F-42C9-A744-6F4D6662D924.png',
    description: 'Naturally flavored vanilla Tanzanian single origin cold brew, 250 ml.',
    vibe: 'Smooth velocity. Sophisticated calibration.',
    spec: 'Zero synthetic vanillin. Crafted using real aromatic vanilla pod extracts.',
    sensory:
      'Creamy, sweet vanilla top notes that shift into a smooth, floral, high altitude coffee backbone.',
  },
  {
    id: 4,
    key: 'latte',
    name: 'LATTE (Smooth and Creamy)',
    price: 'R45',
    size: '250 ml can',
    tag: 'SMOOTH TEXTURE',
    image: '/product/FAED8486-8CB2-4804-8488-B0F7DC9040CC.png',
    hoverImage: '/product/1147BAD2-6ED6-49EA-942A-38BF656C72B9.png',
    description: 'Smooth and creamy Tanzanian single origin cold brew, 250 ml.',
    vibe: 'The ultimate morning ritual, accelerated.',
    spec: 'Micro emulsified dairy or alternative blend for an incredibly smooth texture without clumping or separation over time.',
    sensory:
      'Silky, melt in the mouth creaminess upfront that balances a potent and robust double shot coffee punch.',
  },
]

export function getProductByKey(key: string): Product | undefined {
  return products.find((product) => product.key === key)
}
