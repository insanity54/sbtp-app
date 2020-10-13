import { gql, useQuery, useLazyQuery } from '@apollo/client'

export const SEARCH_PRODUCTS = gql`
  query SearchProducts ($searchTerms: String) {
    products(
      where: {
        title_contains: $searchTerms
      }
    ) {
      id
      title
      description
      media {
        url
      }
    }
  }
`


export function useSearchProducts() {
  const { data, loading, error, refetch } = useQuery(SEARCH_PRODUCTS)
  return { data, loading, error, refetch }
}
