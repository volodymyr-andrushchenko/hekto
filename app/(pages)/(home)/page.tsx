import { ProductApi } from '@/app/modules/product/api'
import Header from '@/app/modules/layout/header/Header'
import Hero from '@/app/modules/hero/Hero'
import Featured from '@/app/modules/featured/Featured'

export default async function Home() {
  const products = await ProductApi.getProducts()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Featured products={products} />
      </main>
    </>
  )
}
