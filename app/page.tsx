import Header from './components/header/Header'
import { ProductApi } from './(utils)/api'
import Hero from '@/app/components/hero/Hero'
import Featured from './components/featured/Featured'

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
