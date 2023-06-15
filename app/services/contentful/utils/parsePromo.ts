import * as contentful from 'contentful'
import type { PromoEntrySkeleton } from '../types'
import type { Promo } from '@/app/modules/hero/types/promo'

export const parsePromoFromEntry = (
  item: contentful.Entry<
    PromoEntrySkeleton,
    'WITHOUT_UNRESOLVABLE_LINKS',
    string
  >
): Promo => {
  const tags = item.metadata.tags.map((tag) => tag.sys.id)

  const id = item.sys.id

  const title = item.fields.title

  const subtitle = item.fields.subtitle

  const info = item.fields.info

  const buttonText = item.fields.buttonText

  const imageMain = 'https:' + item.fields.imageMain?.fields?.file?.url

  const imageSecondary =
    'https:' + item.fields.imageSecondary?.fields?.file?.url

  const mainColor = item.fields.mainColor

  const secondaryColor = item.fields.secondaryColor

  return {
    id,
    title,
    subtitle,
    info,
    buttonText,
    imageMain,
    imageSecondary,
    mainColor,
    secondaryColor,
    tags,
  }
}
