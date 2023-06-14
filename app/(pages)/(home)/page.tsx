import { ProductApi } from '@/app/modules/product/api'
import Hero from '@/app/modules/hero/Hero'
import Featured from '@/app/modules/featured/Featured'
import Specials from '@/app/modules/specials/Specials'

export default async function Home() {
  const products = await ProductApi.getProducts()

  const featured = products.filter(({ tags }) => tags.includes('feat'))

  return (
    <main>
      <Hero />
      <Featured products={featured} />
      <Specials products={products} />
    </main>
  )
}
