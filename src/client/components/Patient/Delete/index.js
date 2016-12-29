import React from 'react';
import {browserHistory} from 'react-router';
import PubSub from 'pubsub-js';
import {injectIntl} from 'react-intl';
import Roles from '../../../../Common/config/RoleStore';
import StoreIndex from '../Stores';

class Delete extends React.Component {
  componentWillMount() {
    const {messages} = this.props.intl;
    Roles.matchRoles(['authorized'], null, '/admin');
    const {id} = this.props.params;
    this.store = new StoreIndex('lesson_preps');
    if (id) {
      this.store.destroyResource(id).then((data) => {
        PubSub.publish('NOTIFY', {
          autoDismiss: 3,
          dismissible: true,
          level: "error",
          message: messages['message.deleted.body'],
          position: "br",
          title: messages['message.deleted.title']
        });
        browserHistory.push('/lessons');
      });
    }
  }
  render() {
    return null;
  }
}

export default injectIntl(Delete);
