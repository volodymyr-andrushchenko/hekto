import { FC } from 'react'
import cl from './BiggerCard.module.scss'
import Image from 'next/image'
import names from 'classnames'
import { lato } from '@/app/styles/fonts'
import { Product } from '@/app/modules/product/types/product.type'
import Link from 'next/link'
import AddToCartButton from '@/app/modules/cart/add-to-cart-button/AddToCartButton'

type Props = {
  product: Product
}

const BiggerCard: FC<Props> = ({ product }) => {
  return (
    <div className={cl.card}>
      <AddToCartButton
        className={cl.addToCartButton}
        text=""
        product={product}
      />
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.pictureSrc}
          alt={product.name}
          width={360}
          height={270}
          className={cl.image}
        />
      </Link>
      <div
        className={names(
          cl.description,
          lato.className,
          'flex',
          'space-between',
          'align-center'
        )}
      >
        <h3 className={cl.name}>{product.name}</h3>
        <p className={cl.price}>
          ${product.price}.00{' '}
          <span className={cl.oldPrice}>
            ${Math.floor(product.price / 1.6)}.00
          </span>
        </p>
      </div>
    </div>
  )
}

export default BiggerCard
