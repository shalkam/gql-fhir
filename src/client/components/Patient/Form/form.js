import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {hashHistory} from 'react-router';
import {
  Tab,
  Nav,
  NavItem,
  Button,
  Col,
  Row
} from 'react-bootstrap';
import { Checkbox, CheckboxGroup, Input, RadioGroup, Select, File, Textarea } from 'formsy-react-components';
import ToHumanName from '../../../common/fhir/helpers/to-human-name.js';
import ToNationalID from '../../../common/fhir/helpers/to-national-id.js';

class Form extends Component {
  componentWillMount() {
    this.setState({canSubmit: false, model: {}});
  }
  componentWillReceiveProps(newProps){
    let model = newProps.model;
    if(model.deceasedDateTime) {
      const date = new Date(model.deceasedDateTime);
      model.deceasedDateTime = date.toISOString().slice(0, -1);
    }
    this.refs.form.reset(model);
  }
  formatDateTime(datetime) {
    datetime = new Date(datetime);
    datetime = datetime
    .toLocaleString('en-US',{hour12: false})
    .replace(/\//g, '-')
    .replace(', ', 'T');
    return datetime;
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
      new Notification("Patient Saved", {body: `Patient ${model.name[0].text} was saved`})
      hashHistory.push('/patients');
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }
  render() {
    return <Formsy.Form ref='form' onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
      <Tab.Container defaultActiveKey="first">
        <div>
          <Nav bsStyle="tabs">
            <NavItem eventKey="first">
              Tab 1
            </NavItem>
            <NavItem eventKey="second">
              Tab 2
            </NavItem>
          </Nav>
          <div className="padded-more">
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
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
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div className="padded-more">
                  <Input name='birthDate' label='Birth Date' type="date"/>
                  <Checkbox name='deceasedBoolean' label='is deceased?' value={false} />
                  <Input name='deceasedDateTime' label='Deceased date and time' type="datetime-local"/>
                  <fieldset>
                    <legend>Address</legend>
                    <Select
                      name="address[0][use]"
                      label="Use"
                      help="This is a required select element."
                      options={[
                        {value: '', label: 'Select...'},
                        {value: 'Home', label: 'Home'},
                        {value: 'Office', label: 'Office'},
                        {value: 'Temporary', label: 'Temporary'},
                        {value: 'OldIncorrect', label: 'OldIncorrect'}
                      ]}
                      />
                    <Textarea name="address[0][text]" label="text" />
                  </fieldset>
                  <Select
                    name="mariatalStatus[text]"
                    label="Mariatal Status"
                    options={[
                      {value: '', label: 'Select...'},
                      {value: 'A', label: 'Annulled'},
                      {value: 'D', label: 'Divorced'},
                      {value: 'I', label: 'Interlocutory'},
                      {value: 'L', label: 'Legally Separated'},
                      {value: 'M', label: 'Married'},
                      {value: 'P', label: 'Polygamous'},
                      {value: 'S', label: 'Never Married'},
                      {value: 'T', label: '	Domestic partner'},
                      {value: 'W', label: 'Widowed'},
                      {value: 'UNK', label: 'Unknown'}
                    ]}
                    />
                  <Checkbox name='multipleBirthBoolean' label='is multiple birth?' value={false} />
                  <Input name='multipleBirthInteger' label='Number of birth' type="number" step="1"/>
                </div>
              </Tab.Pane>
            </Tab.Content>
            <Button className='pull-right' bsStyle="primary" type="submit" disabled={!this.state.canSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Tab.Container>
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
