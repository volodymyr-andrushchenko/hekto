import Card from './components/card/Card'
import mainCl from '@/app/style/Main.module.scss'
import names from 'classnames'
import cl from './Featured.module.scss'
import { Product } from '@/app/types'
import { FC } from 'react'

const Featured: FC<{ products: Product[] }> = ({ products }) => {
  return (
    <section className="container">
      <h2 className={mainCl.sectionTitle}>Featured Products</h2>
      <ul className={names(cl.products, 'flex', 'wrap', 'gap-30')}>
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Featured
