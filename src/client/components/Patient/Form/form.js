import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {hashHistory} from 'react-router';
import { Checkbox, CheckboxGroup, Input, RadioGroup, Row, Select, File, Textarea } from 'formsy-react-components';
import ToHumanName from '../../../common/fhir/helpers/to-human-name.js';
import ToNationalID from '../../../common/fhir/helpers/to-national-id.js';

class Form extends Component {
  componentWillMount() {
    this.setState({canSubmit: false, model: {}});
  }
  componentWillReceiveProps(newProps){
    this.refs.form.reset(newProps.model);
  }
  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  submit(model) {
    // if(model.name) model.name = ToHumanName(model.name);
    // if(model.identifier) model.identifier = ToNationalID(model.identifier);
    console.log(model);
    this.props.mutate({ variables: {model}})
    .then(({ data }) => {
      new Notification("Patient Saved", {body: `Patient ${model.name.text} was saved`})
      hashHistory.push('/patients');
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }
  render() {
    return <Formsy.Form ref='form' onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
        <Input name="_id" value={null} type='hidden'/>
        <Input name="identifier[0][value]" label="National ID" required/>
        <Checkbox name="active" label="active?" value={false}/>
        <Input name="name[0][text]" label="Patient's Name" required/>
        <fieldset>
          <legend>Telecom</legend>
          <Select
            name="telecom[0][system]"
            label="System"
            help="This is a required select element."
            options={[
              {value: '', label: 'Select...'},
              {value: 'Phone', label: 'phone'},
              {value: 'Fax', label: 'fax'},
              {value: 'Email', label: 'email'},
              {value: 'Pager', label: 'pager'},
              {value: 'URL', label: 'URL'}
            ]}
            required
            />
          <Select
            name="telecom[0][use]"
            label="Use"
            help="This is a required select element."
            options={[
              {value: '', label: 'Select...'},
              {value: 'Home', label: 'Home'},
              {value: 'Work', label: 'Work'},
              {value: 'Temp', label: 'Temp'},
              {value: 'Old', label: 'Old'},
              {value: 'Mobile', label: 'Mobile'}
            ]}
            required
            />
          <Input name="telecom[0][value]" label="Value" required/>
        </fieldset>
        <Select
          name="gender"
          label="Gender"
          options={[
            {value: '', label: 'Select...'},
            {value: 'Male', label: 'Male'},
            {value: 'Female', label: 'Female'},
            {value: 'Other', label: 'Other'},
            {value: 'Unknown', label: 'Unknown'}
          ]}
          required
          />
        <Input name='birthDate' label='Birth Date' type="date"/>
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy.Form>
  }
}
Form.propTypes = {
  mutate: PropTypes.func.isRequired
};

const submit = gql`
mutation submit($model: PatientInput!) {
  upsertPatient(data: $model) {
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

export default graphql(submit)(Form);
