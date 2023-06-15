import { FC } from 'react'
import names from 'classnames'
import Card from '@/app/modules/product/card/Card'
import mainCl from '@/app/(pages)/(home)/Home.module.scss'
import { Product } from '@/app/modules/product/types/product.type'

const Featured: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="container">
      <h2 className={mainCl.sectionTitle}>Featured Products</h2>
      <ul className={names('mt-50', 'flex', 'wrap', 'gap-30')}>
        {products.map((product) => (
          <li key={product.id}>
            <Card variant="featured" product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Featured
