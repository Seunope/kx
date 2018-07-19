import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  // uri: "http://10.0.3.2:3000/graphql",
   uri: "https://karis-x.herokuapp.com",
});

export default client;

