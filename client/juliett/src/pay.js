import React from 'react'
import qr from './assets/qr.png'

export default class Pay extends React.Component{

  render() {
    return (
      <div className="qr">
        <img alt="qr" src={qr}/>
      </div>
    )
  }
}
