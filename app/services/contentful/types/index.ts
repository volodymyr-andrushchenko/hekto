import * as contentful from 'contentful'

export type ProductEntrySkeleton = {
  contentTypeId: 'product'
  fields: {
    name: contentful.EntryFieldTypes.Text
    picture: contentful.EntryFieldTypes.AssetLink
    price: contentful.EntryFieldTypes.Number
    colors: contentful.EntryFieldTypes.Text[] // this is wrong but i don't know how to fix it
  }
}

export type PromoEntrySkeleton = {
  contentTypeId: 'productPromo'
  fields: {
    title: contentful.EntryFieldTypes.Text
    mainColor: contentful.EntryFieldTypes.Text
    secondaryColor: contentful.EntryFieldTypes.Text
    subtitle: contentful.EntryFieldTypes.Text
    info: contentful.EntryFieldTypes.Text
    buttonText: contentful.EntryFieldTypes.Text
    imageMain: contentful.EntryFieldTypes.AssetLink
    imageSecondary: contentful.EntryFieldTypes.AssetLink
  }
}
