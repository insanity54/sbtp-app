
import { InMemoryCache, makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
  typePolicies: {
    UsersPermissionsUser: {
      fields: {
        mailingName: {
          read () {
            return mailingNameVar();
          },
          merge (existing = mailingNameVar(), incoming) {
            return mailingNameVar(incoming)
          }
        }
      }
    }
  }
});

/**
 * Set initial values when we create cache variables.
 */
export const mailingNameVar = makeVar('Sofa King')
