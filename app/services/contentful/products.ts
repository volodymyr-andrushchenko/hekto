import { client } from '@/app/services/contentful'
import type { Product } from '@/app/modules/product/types/product.type'
import { ProductEntrySkeleton } from '@/app/services/contentful/types'
import { parseProductFromEntry } from '@/app/services/contentful/utils/parseProduct'

export const ProductApi = {
  getProducts: async (): Promise<Product[]> =>
    client.withoutUnresolvableLinks
      .getEntries<ProductEntrySkeleton>({ content_type: 'product' })
      .then((response) => response.items.map(parseProductFromEntry)),

  getProduct: async (id: string): Promise<Product> =>
    client.withoutUnresolvableLinks
      .getEntry<ProductEntrySkeleton>(id)
      .then(parseProductFromEntry),
} as const
