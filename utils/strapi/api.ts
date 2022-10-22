import { ApolloClient, ApolloQueryResult, gql, InMemoryCache } from '@apollo/client';
import { STRAPI_API_URL } from 'config/env';

const fetchAPI = async (queries: string): Promise<ApolloQueryResult<any>> => {
  const appolo = new ApolloClient({
    uri: `${STRAPI_API_URL}/graphql`,
    cache: new InMemoryCache(),
  });
  const response = await appolo.query({
    query: gql`
      ${queries}
    `,
  });
  return response;
};

export default fetchAPI;
