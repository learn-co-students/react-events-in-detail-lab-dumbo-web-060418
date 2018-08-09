// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (e) => {
    let delay = this.props.delay
    e.persist()
    //setTimeout(this.props.onDelayedClick.bind(null, e), delay)
    setTimeout(() => this.props.onDelayedClick(e), delay)
  }

  render(){
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }

}
