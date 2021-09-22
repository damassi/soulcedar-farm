import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api.baseql.com/airtable/graphql/appRhw81RAkGRShxJ",
  cache: new InMemoryCache(),
});
