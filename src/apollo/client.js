
import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import typePolicies from './state'

console.log(typePolicies)

const client = (data) => {
  const httpLink = createHttpLink({
    uri: `${data.site.siteMetadata.apiURL}/graphql`,
    fetch
  })

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('jwt');
    return {
      headers: {
        ...headers,
        "Authorization": token ? `Bearer ${token}` : ""
      }
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({typePolicies})
  })
}

export default client;
