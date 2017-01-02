import React from 'react';
import {
  Window,
  Toolbar,
  Content,
  Actionbar,
  Pane
} from 'react-photonkit';
import {
  ButtonGroup,
  Button,
  Glyphicon
} from 'react-bootstrap';
import PubSub from 'pubsub-js';
import Nav from './Nav.jsx';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

export default class Layout extends React.Component {
  componentWillMount() {
    this.setState({
      title: 'Home',
      toolbar: <Toolbar  psType="footer">
      <Actionbar>
        <ButtonGroup>
          <Button bsSize="small" onClick={() => hashHistory.goBack()}>
            <Glyphicon glyph="menu-left" />
          </Button>
          <Button bsSize="small" onClick={() => hashHistory.goForward()}>
            <Glyphicon glyph="menu-right" />
          </Button>
        </ButtonGroup>
      </Actionbar>
    </Toolbar>
  });
  PubSub.subscribe('TITLE', (msg, title) => this.setState({ title }));
  PubSub.subscribe('TOOLBAR', (msg, toolbar) => this.setState({ toolbar }));
}
render() {
  return <Window>
    <Toolbar title={this.state.title}/>
    <Content>
      <Pane ptSize="sm" sidebar>
        <Nav />
      </Pane>
      <Pane>
        {this.props.children}
      </Pane>
    </Content>
    {this.state.toolbar}
  </Window>
}
}
