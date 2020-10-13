import { gql, useQuery, useLazyQuery } from '@apollo/client'

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
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS)
  return { data, loading, error, refetch }
}

export function useLazyGetProducts() {
  const [ getProducts, { data, loading, error, refetch} ] = useLazyQuery(GET_PRODUCTS)
  return [ getProducts, { data, loading, error, refetch} ]
}
