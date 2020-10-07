import { gql, useQuery } from '@apollo/client'

export const GET_PRIZES = gql`
  query GetPrizes {
  	prizes {
      id
      Title
      Description
    }
  }
`


export function useGetPrizes() {
  const { data, loading, error } = useQuery(GET_PRIZES)
  return { data, loading, error }
}
