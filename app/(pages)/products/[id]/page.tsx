import { ProductApi } from '@/app/modules/product/api'
import Header from '@/app/modules/layout/header/Header'
import { FC } from 'react'
import AddToCartBtn from '@/app/modules/cart/AddToCartBtn'

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
        <AddToCartBtn item={product} />
      </div>
    </>
  )
}

export default Page
