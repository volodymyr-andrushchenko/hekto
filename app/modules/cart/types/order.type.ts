import type { Product } from '@/app/modules/product/types/product.type'

export type Order = {
  product: Product
  quantity: number
  color?: string
}
