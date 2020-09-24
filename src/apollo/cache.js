
import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    UsersPermissionsUser: {
      fields: {
        name: {
          read () {
            return nameVar();
          },
          merge (existing = nameVar(), incoming) {
            return nameVar(incoming)
          }
        },
        street1: {
          read () {
            return street1Var();
          },
          merge (existing = street1Var(), incoming) {
            return street1Var(incoming)
          }
        },
        street2: {
          read () {
            return street2Var();
          },
          merge (existing = street2Var(), incoming) {
            return street2Var(incoming)
          }
        },
        stateVar: {
          read () {
            return stateVar();
          },
          merge (existing = stateVar(), incoming) {
            return stateVar(incoming)
          }
        },
        cityVar: {
          read () {
            return cityVar();
          },
          merge (existing = cityVar(), incoming) {
            return cityVar(incoming)
          }
        },
        postalCodeVar: {
          read () {
            return postalCodeVar();
          },
          merge (existing = postalCodeVar(), incoming) {
            return postalCodeVar(incoming)
          }
        },
        countryVar: {
          read () {
            return countryVar();
          },
          merge (existing = countryVar(), incoming) {
            return countryVar(incoming)
          }
        },
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */
export const nameVar = makeVar('Teh Sofa King')
export const street1Var = makeVar('Default Street 1')
export const street2Var = makeVar('Default Street 2')
export const stateVar = makeVar('69')
export const cityVar = makeVar('Default City')
export const postalCodeVar = makeVar(4206969)
export const countryVar = makeVar('Default Country')
