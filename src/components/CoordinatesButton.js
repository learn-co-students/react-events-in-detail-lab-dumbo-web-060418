// Code CoordinatesButton Component Here
import React, { Component } from 'react'


export default class CoordinatesButton extends Component {
    constructor(props) {
      super(props)

      // console.log(this.props.onReceiveCoordinates)

    }

    render(){
      // console.log(props)
        return (
          <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>

          </button>
        )
        }
}
