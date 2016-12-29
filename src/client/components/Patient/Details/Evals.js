import React from 'react';
import FOut from './FOut';
import {injectIntl} from 'react-intl';

class Evals extends React.Component {
  render() {
    const {messages} = this.props.intl;

    const tpl = this.props.data.map((ev, k) => {
      if (ev.tool) {
        return <div>
          <FOut data={ev.tool} label={messages['label.evalTool']} />
          <FOut data={ev.strategy} label={messages['label.evalStrategy']} />
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th rowSpan='2' style={{ width: '50px', verticalAlign: 'middle' }}>#</th>
                <th rowSpan='2' style={{ textAlign:'center', verticalAlign: 'middle' }}>{messages['label.standards']}</th>
                <th colSpan={ev.grades.length} style={{ textAlign:'center'}}>{messages['label.grade']}</th>
              </tr>
              <tr>
                {ev.grades.map((grade) => {
                  return <th> {grade.name} </th>
                }) }
              </tr>
            </thead>
            <tbody>
              {ev.standards.map((standard, i) => {
                return <tr>
                  <td>{i + 1}</td>
                  <td>{standard.name} </td>
                  {ev.grades.map((grade) => {
                    return <td></td>
                  }) }
                </tr>
              }) }
            </tbody>
          </table>
        </div>
      }
    });
    return <div>{tpl}</div>;
  }
}

export default injectIntl(Evals);
