import { gql, useMutation as uM } from '@apollo/client'

export default gql`
  mutation UpdateUser(
    $id: ID!,
    $name: String,
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
            name: $name,
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
