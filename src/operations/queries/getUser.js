import { gql } from '@apollo/client'

export default gql`
  query GetUser ($id: ID!) {
    user (id: $id) {
      mailingName
      mailingAddress1
      mailingAddress2
      mailingCity
      mailingState
      mailingPostalCode
      mailingCountry
      specialDate
      birthDate
    }
  }
  `
