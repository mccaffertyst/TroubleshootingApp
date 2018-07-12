import React from "react";

//graphql / apollo api imports
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

//local imports
import Navigator from "./Navigator";

//apollo api client
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.graph.cool/simple/v1/cjjfwbf7x5evq0139gxrqi2am"
  }),
  cache: new InMemoryCache()
});



//homepage render
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}


