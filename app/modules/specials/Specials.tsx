import names from 'classnames'
import mainCl from '@/app/(pages)/(home)/Home.module.scss'
import cl from './Specials.module.scss'
import { FC } from 'react'
import { Props } from './Specials.interface'
import Card from '@/app/modules/product/card/Card'

const Specials: FC<Props> = ({ products }) => {
  return (
    <section className="container">
      <h2 className={mainCl.sectionTitle}>Latest Products</h2>
      <ul className={names('mt-50', 'flex', 'wrap', 'gap-30', 'space-between')}>
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
