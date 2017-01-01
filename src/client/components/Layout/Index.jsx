import React from 'react';
import {
  Window,
  Toolbar,
  Content,
  Pane
} from 'react-photonkit';
import PubSub from 'pubsub-js';
import Nav from './Nav.jsx';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

export default class Layout extends React.Component {
  componentWillMount() {
    this.setState({title: 'Home'});
    PubSub.subscribe('TITLE', (msg, title) => this.setState({ title }));
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
      <Toolbar psType="footer" title="footer"/>
    </Window>
  }
}
