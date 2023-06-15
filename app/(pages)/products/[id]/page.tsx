import { ProductApi } from '@/app/services/contentful/products'
import { FC } from 'react'
import AddToCartButton from '@/app/modules/cart/add-to-cart-button/AddToCartButton'
import cl from './Product.module.scss'

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
    <main className="container">
      <h1>{product.name}</h1>
      <AddToCartButton
        text="Add to cart"
        className={cl.button}
        product={product}
      />
    </main>
  )
}

export default Page
