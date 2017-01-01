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
  }
  navigate(e) {
    console.log(e);
  }
  render() {
    return <div>
      <Toolbar>
        <Actionbar onSelect={this.navigate.bind(this)}>
          <ButtonGroup>
            <Button bsSize="small" onClick={() => hashHistory.goBack()}>
              	<Glyphicon glyph="chevron-left" />
            </Button>
            <Button bsSize="small" onClick={() => hashHistory.goForward()}>
              	<Glyphicon glyph="chevron-right" />
            </Button>
          </ButtonGroup>
          <Button bsSize="small" onClick={() => hashHistory.replace('patients/create')} >
            Add new patient
          </Button>
        </Actionbar>
      </Toolbar>
      {this.props.children}
    </div>
  }
}

export default index;
