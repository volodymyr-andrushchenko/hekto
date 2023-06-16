import { FC } from 'react'
import FeaturedCard from './components/FeaturedCard'
import { Props } from './Card.interface'
import BiggerCard from './components/BiggerCard'

const Card: FC<Props> = ({ product, variant }) => {
  if (variant === 'featured') {
    return <FeaturedCard product={product} />
  }

  return <BiggerCard product={product} />
}

export default Card
