import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import womenCloth from './womenCloths'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, womenCloth],
}
