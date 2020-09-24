import { gql } from '@apollo/client'

export default gql`
  mutation UpdateAddress(
    $id: ID!,
    $name: String,
    $street1: String,
    $street2: String,
    $city: String,
    $state: String,
    $postalCode: String,
    $country: String
  ) {
      updateUser(
        input: {
          where: {
            id: $id
          }
          data: {
            name: $name,
            street1: $street1,
            street2: $street2,
            city: $city,
            state: $state,
            postalCode: $postalCode,
            country: $country
          }
        },
      ) {
        user {
          id
          name
          street1
          street2
          city
          state
          postalCode
          country
        }
      }
  }
`
