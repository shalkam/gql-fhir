import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import PubSub from 'pubsub-js';

export default class Dashboard extends Component {
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
