import { useQuery, gql } from "@apollo/client"
import { getUser } from '../services/auth'

const GET_THEME = gql`
  query DarkThemeQuery($id: ID!) {
    user(id: $id) {
      darkTheme
    }
  }
`


export const useDarkTheme = () => {
  const query = useQuery(GET_THEME, {
    variables: {
      id: getUser().id
    }
  })
  return query
}
