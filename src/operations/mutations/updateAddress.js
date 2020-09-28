import { gql, useMutation as uM } from '@apollo/client' // 'use x as y' just to get around build errors which think I'm using a react hook outside a react component

export const UPDATE_ADDRESS = gql`
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


export function useUpdateAddress () {
  const [mutate, { loading, data, error }] = uM(UPDATE_ADDRESS, {
    update(cache, { data: { mutate } }) {
      cache.modify({
        fields: {
          name(name = 'default name') {
            return name
          },
          street1(street1 = 'default street1') {
            return street1
          },
          street2(street2 = 'default street2') {
            return street2
          },
          city(city = 'default city') {
            return city
          },
          state(state = 'default state') {
            return state
          },
          postalCode(postalCode = 'default postalCode') {
            return postalCode
          },
          country(country = 'default country') {
            return country
          },
        }
      })
    }
  })
  return { mutate, loading, data, error }
}
