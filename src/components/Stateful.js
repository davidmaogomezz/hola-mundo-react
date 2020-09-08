import React, { Component } from 'react'

class Stateful extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stateful: 'Stateful'
    }
  }
  render() {
    return(
      <h1>{this.state.stateful}</h1>
    )
  }
}

export default Stateful