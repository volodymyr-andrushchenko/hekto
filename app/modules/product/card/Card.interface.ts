import { Product } from '@/app/modules/product/types/product.type'

export type Props = {
  product: Product
  variant: 'featured' | 'bigger'
}
