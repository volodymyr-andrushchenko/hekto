import * as contentful from 'contentful'
import type { ProductEntrySkeleton } from '../types'
import type { Product } from '@/app/modules/product/types/product.type'

export const parseProductFromEntry = (
  item: contentful.Entry<
    ProductEntrySkeleton,
    'WITHOUT_UNRESOLVABLE_LINKS',
    string
  >
): Product => {
  const tags = item.metadata.tags.map((tag) => tag.sys.id)

  const id = item.sys.id

  const name = item.fields.name

  const pictureSrc = 'https:' + item.fields.picture?.fields?.file?.url

  let colors = item.fields.colors ?? ([] as string[])

  const price = item.fields.price

  return {
    id,
    name,
    tags,
    colors,
    price,
    pictureSrc,
  }
}
