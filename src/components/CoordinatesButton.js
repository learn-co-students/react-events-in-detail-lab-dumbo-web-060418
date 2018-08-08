// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = (props) => {

  return <button onClick={ (e) => props.onReceiveCoordinates([e.clientX, e.clientY])} />
}

export default CoordinatesButton
