import React from 'react';
import {
  NavGroup,
  NavTitle,
  NavGroupItem
} from 'react-photonkit';
import {hashHistory} from 'react-router';
export default class Nav extends React.Component {
  render() {
    return (
      <NavGroup activeKey={1} onSelect={(e) => { hashHistory.push(e)}} draggable>
        <NavTitle>icon & text</NavTitle>
        <NavGroupItem eventKey={'/'} glyph="home" text="home" />
        <NavGroupItem eventKey={'/patients'} glyph="user" text="Patients"/>
        <NavTitle>text</NavTitle>
        <NavGroupItem eventKey={3} text="home"/>
        <NavGroupItem eventKey={4} text="download"/>
      </NavGroup>
    );
  }
}
