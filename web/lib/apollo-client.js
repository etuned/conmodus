import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret": "ThisIsSoNotASecretRightNow" // should switch to jwt once functionality is setup
},
    uri: "http://localhost:8080/v1/graphql",
    cache: new InMemoryCache(),
});

export default client;