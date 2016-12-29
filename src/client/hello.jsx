import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PubSub from 'pubsub-js';

class Hello extends Component {
  componentWillMount() {
    PubSub.publish('TITLE', 'Home');
  }
  render() {
    const {hello} = this.props.data
    return <div>
       Welcome to our app!!!
    </div>;
  }
}
var component = graphql(gql`query showAll {
  patients {
    _id,
    birthDate,
    address {
      use
    }
  }
}`)(Hello);
export default component;
