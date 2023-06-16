import { FC } from 'react'
import cl from './CardComponent.module.scss'
import Image from 'next/image'
import names from 'classnames'
import { Product } from '@/app/modules/product/types/product.type'
import Link from 'next/link'
import AddToCartButton from '@/app/modules/cart/add-to-cart-button/AddToCartButton'

type Props = {
  product: Product
}

const BiggerCard: FC<Props> = ({ product }) => {
  return (
    <div className={names(cl.card, cl.bigger)}>
      <AddToCartButton
        className={names(cl.addToCartButton, cl.centerLeft)}
        product={product}
      />
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.pictureSrc}
          alt={product.name}
          width={360}
          height={270}
        />
      </Link>
      <div className={names('flex', 'space-between', 'align-center')}>
        <h3 className={cl.nameBasic}>{product.name}</h3>
        <p className={cl.price}>
          ${product.price}.00{' '}
          <span className={cl.discountedPrice}>
            ${Math.floor(product.price / 1.6)}.00
          </span>
        </p>
      </div>
    </div>
  )
}

export default BiggerCard
