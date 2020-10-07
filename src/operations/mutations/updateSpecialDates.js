import { gql, useMutation as uM } from '@apollo/client' // 'use x as y' just to get around build errors which think I'm using a react hook outside a react component

export const UPDATE_SPECIAL_DATES = gql`
  mutation UpdateSpecialDates (
    $id: ID!
    $specialDate: DateTime
    $birthDate: DateTime
    $specialDateDescription: String
  ) {
      updateUser(
        input: {
          where: {
            id: $id
          }
          data: {
            specialDate: $specialDate
            birthDate: $birthDate
            specialDateDescription: $specialDateDescription
          }
        },
      ) {
        user {
          id
          specialDate
          birthDate
          specialDateDescription
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
