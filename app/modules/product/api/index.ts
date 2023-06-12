import { client } from '@/app/services/contentful'
import type { Product } from '@/app/modules/product/types/product.type'
import * as contentful from 'contentful'

type ProductEntrySkeleton = {
  contentTypeId: 'product'
  fields: {
    name: contentful.EntryFieldTypes.Text
    picture: contentful.EntryFieldTypes.AssetLink
    price: contentful.EntryFieldTypes.Number
    colors: contentful.EntryFieldTypes.Text[] // this is wrong but i don't know how to fix it
  }
}

const getProductFromEntry = (
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

export const ProductApi = {
  getProducts: async (): Promise<Product[]> => {
    const products = await client.withoutUnresolvableLinks
      .getEntries<ProductEntrySkeleton>({ content_type: 'product' })
      .then((response) => response.items.map(getProductFromEntry))
      .catch(console.error)

    return products ?? []
  },
  getProduct: async (id: string): Promise<Product> =>
    client.withoutUnresolvableLinks
      .getEntry<ProductEntrySkeleton>(id)
      .then(getProductFromEntry),
} as const
