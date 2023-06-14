import { FC } from 'react'
import FeaturedCard from './variants/featured/FeaturedCard'
import { Props } from './Card.interface'
import { assertUnreachable } from '@/app/helpers'
import BiggerCard from './variants/bigger/BiggerCard'

const Card: FC<Props> = ({ product, variant }) => {
  switch (variant) {
    case 'featured':
      return <FeaturedCard product={product} />

    case 'bigger':
      return <BiggerCard product={product} />

    default:
      assertUnreachable(variant)
  }
}

export default Card
