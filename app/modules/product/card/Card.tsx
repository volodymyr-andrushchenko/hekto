import { FC } from 'react'
import cl from './Card.module.scss'
import Image from 'next/image'
import names from 'classnames'
import { lato } from '@/app/styles/fonts'
import { Product } from '@/app/modules/product/types/product.type'
import Link from 'next/link'

type Props = {
  product: Product
}

const Card: FC<Props> = ({
  product: { name, pictureSrc, id, colors, price, tags },
}) => {
  return (
    <div className={cl.card}>
      <Link href={`/products/${id}`}>
        <Image
          src={pictureSrc}
          alt={name}
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
        <h3 className={cl.name}>{name}</h3>
        <ul className="flex">
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={name}
              value="#05E6B7"
              style={{ backgroundColor: '#05E6B7' }}
            />
          </li>
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={name}
              value="#00009D"
              style={{ backgroundColor: '#00009D' }}
            />
          </li>
          <li className={cl.colorPaletteListItem}>
            <input
              className={cl.colorRadio}
              type="radio"
              name={name}
              value="#FFEAC1"
              style={{ backgroundColor: '#FFEAC1' }}
            />
          </li>
        </ul>
        <p className={cl.code}>Code - {id}</p>
        <p className={cl.price}>${price}.00</p>
      </div>
    </div>
  )
}

export default Card
