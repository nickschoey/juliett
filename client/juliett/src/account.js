import React from 'react'


export default class Account extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let date = this.props.el.date.toString().slice(0, 10)
    let time = this.props.el.date.toString().slice(11, 19)
    let ether = this.props.el.pricePaid/Math.pow(10,18)
    let rate = (this.props.el.exchangeRate/Math.pow(10,18)).toFixed(7)
    let hash = this.props.el.hash.substr(0,5)+'.... '+this.props.el.hash.substr(-3)

    return (



        <tr>
          <td>{date}</td>
          <td>{time}</td>
          <td>{this.props.el.item}</td>
          <td>{this.props.el.priceFiat}</td>
          <td>{ether}</td>
          <td>{rate}</td>
          <td>{this.props.el.block}</td>
          <td>{hash}</td>
        </tr>

    )
  }



}
