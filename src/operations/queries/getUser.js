import { gql } from '@apollo/client'

export default gql`
  query GetUser ($id: ID!) {
    user (id: $id) {
      id
      name
      street1
      street2
      city
      state
      postalCode
      country
      specialDate
      birthDate
      addressMode @client
    }
  }
  `
