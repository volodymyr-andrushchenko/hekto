import names from 'classnames'
import mainCl from '@/app/(pages)/(home)/Home.module.scss'
import cl from './Specials.module.scss'
import { FC } from 'react'
import { Product } from '@/app/modules/product/types/product.type'
import Card from '../product/card/Card'

const Specials: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="container">
      <h2 className={mainCl.sectionTitle}>Latest Products</h2>
      <ul className={names('flex', 'wrap', 'gap-30')}>
        {products.map((product) => (
          <li key={product.id}>
            <Card variant="bigger" product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Specials
