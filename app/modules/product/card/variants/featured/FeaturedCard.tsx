import { FC } from 'react'
import cl from './FeaturedCard.module.scss'
import Image from 'next/image'
import names from 'classnames'
import { lato } from '@/app/styles/fonts'
import { Product } from '@/app/modules/product/types/product.type'
import Link from 'next/link'
import AddToCartButton from '@/app/modules/cart/add-to-cart-button/AddToCartButton'

type Props = {
  product: Product
}

const FeaturedCard: FC<Props> = ({ product }) => {
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
          width={270}
          height={236}
          className={cl.image}
        />
      </Link>
      <div
        className={names(
          cl.description,
          lato.className,
          'flex',
          'column',
          'align-center'
        )}
      >
        <h3 className={cl.name}>{product.name}</h3>
        <ul className="flex">
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={product.name}
              value="#05E6B7"
              style={{ backgroundColor: '#05E6B7' }}
            />
          </li>
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={product.name}
              value="#00009D"
              style={{ backgroundColor: '#00009D' }}
            />
          </li>
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={product.name}
              value="#FFEAC1"
              style={{ backgroundColor: '#FFEAC1' }}
            />
          </li>
        </ul>
        <p className={cl.code}>Code - {product.id}</p>
        <p className={cl.price}>${product.price}.00</p>
      </div>
    </div>
  )
}

export default FeaturedCard
