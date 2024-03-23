import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div style={{margin:'10px auto',textAlign:'center'}}>
        <img src={loading} alt="loading" style={{width:'25px'}} />
      </div>
    )
  }
}

export default spinner
