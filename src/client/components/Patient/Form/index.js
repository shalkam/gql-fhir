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
    return <Form model={this.state.model}/>
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
     deceasedBoolean
     deceasedDateTime
     address {
       use
       text
     }
     mariatalStatus{
       text
     }
     multipleBirthBoolean
     multipleBirthInteger
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
