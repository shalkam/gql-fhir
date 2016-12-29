import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {hashHistory} from 'react-router';
import Form from './form.js';

class FormIndex extends Component {
  componentWillMount() {
    this.setState({ model: {} });
  }
  componentWillReceiveProps(newProps) {
    if(newProps.data && !newProps.data.loading) {
      this.props.data.refetch();
      this.setState({ model: newProps.data.patient});
    }
  }
  render() {
    return <div className='padded-more'>
      <Form model={this.state.model}/>
    </div>
  }
}

const query = gql`query load($id: ID!) {
  patient(id: $id) {
    _id
    active
    birthDate
    identifier {
      value
    }
    name {
      text
    }
    address {
      use
    }
    telecom {
      use
      system
      value
    }
    gender
  }
}`;

export default graphql(query, {
  options: (props) => {
    let options = {};
    if(props.params.id){
      options.variables = {id: props.params.id}
    }else{
      options.skip = true;
    }
    return options;
  }
})(FormIndex);
