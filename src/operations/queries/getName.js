import { gql } from '@apollo/client'

export default gql`
  query GetName ($id: ID!) {
    user (id: $id) {
      name
    }
  }
`
