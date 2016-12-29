import React from 'react';
import {DeliveryService, Store} from 'react-at-rest';
import {Panel} from 'react-bootstrap';
import {injectIntl} from 'react-intl';
import PubSub from 'pubsub-js';

import FOut from './FOut';
import Evals from './Evals';

class DetailsIndex extends DeliveryService {

  constructor(props) {
    super(props)
    //  create a new Store which connected to an API at / posts
    this.store = new Store('lesson_preps');
  }

  bindResources(props) {
    this.retrieveResource(this.store, { id: this.props.params.id });
  }

  render() {
    const {messages} = this.props.intl;
    // # show a loading message while loading data
    if (!this.state.loaded) {
      PubSub.publish('NOTIFY', {
          autoDismiss: false,
          dismissible: true,
          level: "info",
          message: messages['message.loading.body'],
          position: "br",
          title: messages['message.loading.title'],
          uid: 'loading-lessonprep-details'
      });
      return null;
    }
    PubSub.publish('NOTIFY_REMOVE', 'loading-lessonprep-details');
    const {lesson_prep} = this.state;
    let date = null;
    if(lesson_prep.date) {
      date = new Date(lesson_prep.date);
      let dd = date.getDate();
      let mm = date.getMonth() + 1; //January is 0!

      var yyyy = date.getFullYear();
      if (dd < 10) {
        dd = '0' + dd
      }
      if (mm < 10) {
        mm = '0' + mm
      }
      date = dd + '/' + mm + '/' + yyyy;
    }
    return <div>
      <Panel header={messages['section.base']} className='no-pb'>
        <a className="btn btn-info pull-left hidden-print" href={'/lessons/' + lesson_prep.id + '/edit'} >
          {messages['details.edit']}
        </a>
        <FOut label={messages['label.name']} data={lesson_prep.name} />
        <FOut label={messages['label.date']} data={date} />
        <FOut label={messages['label.class']} data={lesson_prep.grade} />
        <FOut label={messages['label.subject']} data={lesson_prep.subject} />
        <FOut label={messages['label.topic']} data={lesson_prep.topic} />
        <FOut label={messages['label.notes']} data={lesson_prep.notes} />
        <FOut label={messages['label.field']} data={messages['field.option.'+ lesson_prep.field]} />
        <FOut label={messages['label.axis']} data={messages['axis.option.'+ lesson_prep.axis]} />
        <FOut label={messages['label.standards']} data={lesson_prep.standards} type="list"/>
        <FOut label={messages['label.outcome']} data={lesson_prep.outcome} type="list"/>
      </Panel>
      <Panel header={messages['section.concepts']} className='no-pb'>
        <FOut label={messages['label.concepts']} data={lesson_prep.concepts} type="list"/>
        <FOut label={messages['label.questions']} data={lesson_prep.questions} type="list"/>
        <FOut label={messages['label.skills']} data={lesson_prep.skills} type="list"/>
      </Panel>
      <Panel header={messages['section.tasks']} className='no-pb'>
        <FOut label={messages['label.tasks']} data={lesson_prep.task} type="list"/>
        <FOut label={messages['label.performanceIndicator']} data={lesson_prep.performanceIndicator} type="list"/>
        <FOut label={messages['label.tests']} data={lesson_prep.tests} type="list"/>
      </Panel>
      <Panel header={messages['section.sources']} className='no-pb'>
        <FOut label={messages['label.activities']} data={lesson_prep.activities} type="list"/>
        <FOut label={messages['label.individualDifferences']} data={lesson_prep.individualDifferences} type="list"/>
        <FOut label={messages['label.sources']} data={lesson_prep.sources} type="list"/>
      </Panel>
     {/*
      <Panel header={messages['section.eval']} className='no-pb'>
        <Evals data={lesson_prep.evaluation} />
      </Panel>
      */}
      {lesson_prep.attachments? <Panel header={messages['section.attachments']} className='no-pb'>
        <ol className='list-group'>
          {lesson_prep.attachments.uploaded.map((file, i) => {
            return <li className='list-group-item' key={i}>
              <a href={'/api/files/' + lesson_prep.attachments.container + '/download/' + file.name}>
                {file.name}
              </a>
            </li>
          })}
        </ol>
      </Panel>: ''}
    </div>
  }
}

export default injectIntl(DetailsIndex);
