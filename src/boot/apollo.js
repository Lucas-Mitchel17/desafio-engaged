import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://rickandmortyapi.com/graphql",
});

const apolloClient = new ApolloClient({
  cache,
  link: httpLink,
});

const apollo = provideApolloClient(apolloClient);

export { apollo };
