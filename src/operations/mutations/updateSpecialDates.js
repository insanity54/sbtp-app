import { gql, useMutation as uM } from '@apollo/client' // 'use x as y' just to get around build errors which think I'm using a react hook outside a react component

export const UPDATE_SPECIAL_DATES = gql`
  mutation UpdateSpecialDates(
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


export function useUpdateSpecialDates () {
  const [mutate, { loading, data, error }] = uM(UPDATE_SPECIAL_DATES, {
    update(cache, { data: { mutate } }) {
      cache.modify({
        fields: {
          specialDate(specialDate) {
            return specialDate
          },
          birthDate(birthDate) {
            return birthDate
          },
          specialDateDescription(specialDateDescription) {
            return specialDateDescription
          },
        }
      })
    }
  })
  return { mutate, loading, data, error }
}
