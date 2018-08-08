// Code DelayedButton Component Here
import React, { Component } from 'react'

class DelayedButton extends Component {

  handleClick = (e) => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return <button onClick={ this.handleClick } />
  }
}
// const DelayedButton = (props) => {
//   console.log(props)
//   return <button onClick={ (e) => setTimeout(props.onDelayedClick(e), props.delay)} />
// }

export default DelayedButton
