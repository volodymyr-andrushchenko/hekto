import { ProductApi } from '@/app/(utils)/api'
import Header from '@/app/components/header/Header'
import { FC } from 'react'

type Params = {
  id: string
}

type Props = {
  params: Params
}

export async function generateStaticParams() {
  const products = await ProductApi.getProducts()

  return products.map(({ id }) => ({ id }))
}

const Page: FC<Props> = async ({ params }) => {
  const product = await ProductApi.getProduct(params.id)

  return (
    <>
      <Header />
      <div className="container">
        <h1>{product.name}</h1>
      </div>
    </>
  )
}

export default Page
