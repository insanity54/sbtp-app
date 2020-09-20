import { gql } from '@apollo/client'

export default gql`
mutation UpdateName(
  $id: ID!,
  $mailingName: String
) {
    updateUser(
      input: {
        where: {
          id: $id
        }
        data: {
          mailingName: $mailingName,
        }
      },
    ) {
      user {
        id
        mailingName
      }
    }
}
`
