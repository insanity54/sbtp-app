import { gql } from '@apollo/client'

export default gql`
mutation UpdateUser(
  $id: ID!,
  $mailingName: String,
  $mailingAddress1: String,
  $mailingAddress2: String,
  $mailingCity: String,
  $mailingState: String,
  $mailingPostalCode: String,
  $mailingCountry: String,
  $specialDate: String,
  $birthDate: String
) {
    updateUser(
      input: {
        where: {
          id: $id
        }
        data: {
          mailingName: $mailingName,
          mailingAddress1: $mailingAddress1,
          mailingAddress2: $mailingAddress2,
          mailingCity: $mailingCity,
          mailingState: $mailingState,
          mailingPostalCode: $mailingPostalCode,
          mailingCountry: $mailingCountry,
          specialDate: $specialDate,
          birthDate: $birthDate
        }
      },
    ) {
      user {
        id
      }
    }
}
`
