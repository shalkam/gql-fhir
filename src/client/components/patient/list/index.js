import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {hashHistory} from 'react-router';
import {Button} from 'react-bootstrap';

class List extends Component {
  componentWillReceiveProps(newProps) {
    this.props.data.refetch();
  }
  render() {
    if(!this.props.data.loading) {
      const {patients} = this.props.data
      return <table className="table-striped">
        <thead>
          <tr>
            <th></th>
            <th>id</th>
            <th>Name</th>
            <th>Name use</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => {
            return <tr>
              <td>
                <Button bsSize="xsmall" bsStyle='primary' onClick={() => hashHistory.push('patients/'+patient._id+'/edit')}>
                  edit
                </Button>
              </td>
              <td>{patient._id}</td>
              <td>{patient.name[0].text}</td>
              <td>{patient.name[0].use}</td>
            </tr>
          })}
        </tbody>
      </table>;
    }
    return <div>Loading ...</div>;
  }
}
var component = graphql(gql`query showAll {
  patients {
    _id
    name {
      text
      use
    }
  }
}`)(List);
export default component;
