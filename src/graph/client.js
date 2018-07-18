import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.0.3.2:4000/graphql",
});

export default client;

