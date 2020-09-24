import { gql } from '@apollo/client'

export default gql`
mutation UpdateName(
  $id: ID!,
  name: String
) {
    updateUser(
      input: {
        where: {
          id: $id
        }
        data: {
          name: $name,
        }
      },
    ) {
      user {
        id
        name
      }
    }
}
`
