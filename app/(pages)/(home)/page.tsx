import { ProductApi } from '@/app/services/contentful/products'
import Hero from '@/app/modules/hero/Hero'
import Featured from '@/app/modules/featured/Featured'
import Specials from '@/app/modules/specials/Specials'
import { PromoApi } from '@/app/services/contentful/promo'

export default async function Home() {
  const products = await ProductApi.getProducts()
  const promos = await PromoApi.getPromos()

  const featured = products.filter(({ tags }) => tags.includes('feat'))

  return (
    <main>
      <Hero promos={promos} />
      <Featured products={featured} />
      <Specials products={products} />
    </main>
  )
}
