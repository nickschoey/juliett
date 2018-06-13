import React from 'react'
import { Table } from 'reactstrap'


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
      <Table>
        <tbody>
          <tc>
            <td>Transaction Hash</td>
            <td>Block Number</td>
            <td>Amount</td>
            <td># of Confirmations Passed</td>
            <td>Date</td>
            <td>Hash</td>
          </tc>
          <tc>
            <td>{this.props.el.tx_hash}</td>
            <td>{this.props.el.block_height}</td>
            <td>{ether}</td>
            <td>{this.props.el.confirmations}</td>
            <td>{date}</td>
            <td>{this.props.el.hash}</td>
          </tc>
        </tbody>
      </Table>
    )
  }

}
