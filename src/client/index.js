import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory } from 'react-router';
import Routes from './routes.js';
import config from '../../config.js';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri:  config.APP_URL + ':' + config.APP_PORT+ '/graphql'}),
});

class App extends React.Component {
  render() {
    return <ApolloProvider client={client}>
      <Router history={hashHistory} routes={Routes} />
    </ApolloProvider>;
  }
}
ReactDOM.render(  <App />,
document.getElementById('app')
);
