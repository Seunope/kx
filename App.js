import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";
import KarisNavigation from "./karisNavigation";
import client from "./src/graph/client";
import { Root } from "native-base";


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Root>
          <KarisNavigation />
        </Root>
      </ApolloProvider>  
    );
  }
}

