import React from 'react';
import {Link} from 'react-router';
import {
  Toolbar,
  Actionbar,
  ButtonGroup,
  Button
} from 'react-photonkit';
import {hashHistory} from 'react-router';
import PubSub from 'pubsub-js';

class index extends React.Component {
  componentWillMount() {
    PubSub.publish('TITLE', 'Patients Management');
  }
  render() {
    return <div>
      <Toolbar>
        <Actionbar onSelect={(e) => console.log(e)}>
          <ButtonGroup>
            <Button eventKey={'back'}  glyph="left-open-big"/>
            <Button eventKey={'next'} glyph="right-open-big"/>
          </ButtonGroup>
          <Button onClick={() => hashHistory.replace('patients/create')} glyph="home" text="Add new patient"/>
        </Actionbar>
      </Toolbar>
      {this.props.children}
    </div>
  }
}

export default index;
