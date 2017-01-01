import React from 'react';
import {Forms} from 'react-at-rest';
import {Button, Table} from 'react-bootstrap';
import qs from 'qs';
import {injectIntl} from 'react-intl';
import {browserHistory, withRouter} from 'react-router';
import DropdownList from '../../../../Common/form-elements/react-widgets/DropdownList';

class Filter extends React.Component {
  componentWillMount() {
    this.setState({ model: this.props.model, nameChanged: false });
  }
  submitForm(e) {
    e.preventDefault();
    const url = qs.stringify(this.state.model, { encode: false });
    browserHistory.push('/lessons/filter?' + url);
  }
  handleChange(name, value) {
    let model = this.state.model;
    if (value) {
      model[name] = value;
    } else {
      delete model[name];
    }
    this.setState({ model });
  }
  render() {
    const {messages} = this.props.intl;
    return <Table striped bordered condensed hover className='hidden-print'>
      <thead>
        <tr>
          <th></th>
          <th>
            الصف
          </th>
          <th>
            المجال
          </th>
          <th>
            المحور
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Button bsStyle='primary' onClick={this.submitForm.bind(this) }>بحث</Button>
          </td>
          <td>
            <DropdownList
              value={this.state.model['grade']}
              hideLabel={true}
              placeholder='كل الصفوف'
              name='grade'
              isRtl={true}
              onChange={this.handleChange.bind(this) }
              valueField='val'
              textField='label'
              data={[
                { val: null, label: 'كل الصفوف' },
                { val: '1', label: '1' },
                { val: '2', label: '2' },
                { val: '3', label: '3' },
                { val: '4', label: '4' },
                { val: '5', label: '5' },
                { val: '6', label: '6' },
                { val: '7', label: '7' },
                { val: '8', label: '8' },
                { val: '9', label: '9' },
                { val: '10', label: '10' },
                { val: '11', label: '11' },
                { val: '12', label: '12' }
              ]}/>
          </td>
          <td>
            <DropdownList
              value={this.state.model['field']}
              hideLabel={true}
              placeholder='كل المجالات'
              name='field'
              isRtl={true}
              valueField='val'
              textField='label'
              data={[
                { val: null, label: 'كل المجالات' },
                { val: 'devine', label: messages['field.option.devine']} ,
                { val: 'creed', label: messages['field.option.creed']} ,
                { val: 'values', label: messages['field.option.values'] },
                { val: 'rules', label: messages['field.option.rules'] },
                { val: 'seera', label: messages['field.option.seera'] },
                { val: 'indentity', label: messages['field.option.indentity']}
              ]}
              onChange={this.handleChange.bind(this) }
              />
          </td>
          <td>
            <DropdownList
              name='axis'
              isRtl={true}
              placeholder='المحور'
              hideLabel={true}
              value={this.state.model['axis']}
              valueField='val'
              textField='label'
              data={[
                { val: null, label: "كل المحاور" },
                { val: 'quran', label: messages['axis.option.quran']},
                { val: 'hadith', label: messages['axis.option.hadith']},
                { val: 'creed', label: messages['axis.option.creed']},
                { val: 'mentality', label: messages['axis.option.mentality']},
                { val: 'values', label: messages['axis.option.values']},
                { val: 'manners', label: messages['axis.option.manners']},
                { val: 'worshipRules', label: messages['axis.option.worshipRules']},
                { val: 'dealingRules', label: messages['axis.option.dealingRules']},
                { val: 'seera', label: messages['axis.option.seera']},
                { val: 'persons', label: messages['axis.option.persons']},
                { val: 'identity', label: messages['axis.option.identity']},
                { val: 'issues', label: messages['axis.option.issues']}
              ]}
              onChange={this.handleChange.bind(this) }/>
          </td>
        </tr>
      </tbody>
    </Table>
  }
}

export default injectIntl(Filter);
