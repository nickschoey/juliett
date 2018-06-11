import React from 'react'
import { Table } from 'reactstrap'

export default class Account extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (

        <tr>
          <td scope="row">{this.props.el.item}</td>
          <td>{this.props.el.priceFiat}</td>
          <td>{this.props.el.priceCryptocurrency}</td>
          <td>{this.props.el.exchangeRate}</td>
          <td>{this.props.el.block}</td>
          <td>{this.props.el.hash}</td>
        </tr>

    )
  }



}
