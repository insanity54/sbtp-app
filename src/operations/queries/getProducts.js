import { gql, useQuery } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      description
      media {
        url
      }
      prizes {
        created_at
      }
    }
  }
`


export function useGetProducts() {
  const { data, loading, error } = useQuery(GET_PRODUCTS)
  return { data, loading, error }
}
