import React, { Component } from 'react'
import { message,Button } from 'antd'
import './App.less';
export default class App extends Component {
  handleClick = () => {
    message.info('This is a normal message');
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick} >Button</Button>
      </div>

    )
  }
}
