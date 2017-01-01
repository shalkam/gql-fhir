import React from 'react';

export default class FOut extends React.Component {
  render() {
    let data = this.props.data;
    if (this.props.type === 'list') {
      data = this.props.data.map((item) => {
        if(item) {
          if (typeof item === 'object' && item.name)
            item = <li className='list-group-item'>{item.name}</li>
          else if(typeof item !== 'object')
            item = <li className='list-group-item'>{item}</li>
          else
            item = null;
          return item;
        }
      })
      data = <ol className='list-group'> {data} </ol>
    }
    if (this.props.data) {
      return <div>
        {this.props.label ? (<label>{this.props.label}: </label>) : '' }
        <span> {data}</span>
      </div>
    } else {
      return null;
    }
  }
}
