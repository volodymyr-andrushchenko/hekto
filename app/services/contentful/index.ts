import * as contentful from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID ?? ''
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN ?? ''

export const client = contentful.createClient({
  space,
  environment: 'master', // defaults to 'master' if not set
  accessToken,
})
