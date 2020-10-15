import { gql, useQuery, useLazyQuery } from '@apollo/client'

export const SEARCH_PRODUCTS = gql`
  query SearchProducts ($searchTerms: String) {
    products(
      where: {
        identifier_contains: $searchTerms
      }
    ) {
      id
      identifier
      title
      description
      media {
        url
      }
    }
  }
`


export function useSearchProducts(opts) {
  return useQuery(SEARCH_PRODUCTS, opts)
}
