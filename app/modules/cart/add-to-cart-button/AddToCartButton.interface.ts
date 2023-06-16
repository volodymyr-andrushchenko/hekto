import { Product } from '@/app/modules/product/types/product.type'

export type Props = {
  product: Product
  className: string
  text?: string
  quantity?: number
}
