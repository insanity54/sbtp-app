import { gql, useQuery } from '@apollo/client'
import { getUser } from '../../services/auth'

export const GET_THEME = gql`
  query DarkThemeQuery($id: ID!) {
    user(id: $id) {
      id
      darkTheme
    }
  }
`

export function useGetTheme() {
  const { loading, error, data } = useQuery(GET_THEME, { variables: { id: getUser().id }});
  return { loading, error, data }
}
