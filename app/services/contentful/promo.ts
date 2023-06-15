import { client } from '@/app/services/contentful'
import type { Promo } from '@/app/modules/hero/types/promo'
import { PromoEntrySkeleton } from './types'
import { parsePromoFromEntry } from './utils/parsePromo'

export const PromoApi = {
  getPromos: async (): Promise<Promo[]> =>
    client.withoutUnresolvableLinks
      .getEntries<PromoEntrySkeleton>({ content_type: 'productPromo' })
      .then((response) => response.items.map(parsePromoFromEntry)),
} as const
