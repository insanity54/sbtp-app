import { gql, useQuery } from '@apollo/client'


export const GET_ADDRESS_MODE = gql`
  query GetAddressMode {
    local {
      addressMode @client
    }
  }
`

export function useGetAddressMode() {
  const { data, loading, error } = useQuery(GET_ADDRESS_MODE)
  return { data, loading, error }
}
