import React from 'react';
import {Link} from 'react-router';
import {
  Toolbar,
  Actionbar,
} from 'react-photonkit';
import {
  ButtonGroup,
  Button,
  Glyphicon
} from 'react-bootstrap';
import {hashHistory} from 'react-router';
import PubSub from 'pubsub-js';
class index extends React.Component {
  componentWillMount() {
    PubSub.publish('TITLE', 'Patients Management');
    PubSub.publish('TOOLBAR', <Toolbar  psType="footer">
    <Actionbar>
      <ButtonGroup>
        <Button bsSize="small" onClick={() => hashHistory.goBack()}>
          <Glyphicon glyph="menu-left" />
        </Button>
        <Button bsSize="small" onClick={() => hashHistory.goForward()}>
          <Glyphicon glyph="menu-right" />
        </Button>
      </ButtonGroup>
      <Button className='pull-right' bsStyle="success" bsSize="xsmall" onClick={() => hashHistory.replace('patients/create')} >
        Add new patient
      </Button>
    </Actionbar>
  </Toolbar>);
}
navigate(e) {
  console.log(e);
}
render() {
  return <div>
    {this.props.children}
  </div>
}
}

export default index;
