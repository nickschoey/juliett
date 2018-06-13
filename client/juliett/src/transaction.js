import React from 'react'
import { Table } from 'reactstrap'
import pizza from './assets/pizza.jpeg'


export default class Transaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let day = this.props.el.confirmed.toString().slice(0, 10)
    let time = this.props.el.confirmed.toString().slice(11, 19)
    let date = day + "  ||  " + time
    let ether = this.props.el.value/Math.pow(10,18)
    console.log(this.props.el)
    return (
    <div className="ind-tx">
      <Table size="sm" borderless>
        <tbody>
          <tc>
            <tr><th>Transaction Hash: </th><td>{this.props.el.tx_hash}</td></tr>
            <tr><th>Block Number: </th><td>{this.props.el.block_height}</td></tr>
            <tr><th>Amount: </th><td>{ether}</td></tr>
            <tr><th># of Confirmations Passed: </th><td>{this.props.el.confirmations}</td></tr>
            <tr><th>Date: </th><td>{date}</td></tr>
          </tc>
        </tbody>
      </Table>
      <img src={pizza} alt='divider' height='50px' class='pizza'/>
    </div>
    )
  }

}
