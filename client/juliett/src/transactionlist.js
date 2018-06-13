import React from 'react'
import { Table } from 'reactstrap'
import Transaction from './transaction'

export default class TransactionList extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      txs: {},
      bool: false

    }
  }

  getAll = () => {
    fetch(this.props.baseUrl+'/check-all')
    .then(res => res.json())
    .then(res => this.setState({txs: res, bool: true}))
    .catch(err => console.error())
  }

  componentWillMount() {
    this.getAll()

  }

    render() {
      console.log(this.state.txs);
      console.log(this.state.bool);
      let received = "Ξ " + (this.state.txs.total_received / Math.pow (10,18)).toString()
      let sent = "Ξ " + (this.state.txs.total_sent / Math.pow (10,18)).toString()
      let balance = "Ξ " + (this.state.txs.balance / Math.pow (10,18)).toString()
      let final_balance = "Ξ " + (this.state.txs.final_balance / Math.pow (10,18)).toString()
      let unconfirmed_balance = "Ξ " + (this.state.txs.unconfirmed_balance / Math.pow (10,18)).toString()

    return (
    <div className="body">
      <Table >
            <tc>
              <tr><th>Address: </th></tr>
              <tr><th>Total Received: </th></tr>
              <tr><th>Total Sent: </th></tr>
              <tr><th>Confirmed Balance: </th></tr>
              <tr><th>Unconfirmed Balance: </th></tr>
              <tr><th>Final Balance: </th></tr>
              <tr><th>Number of Transactions: </th></tr>
            </tc>
            <tc>
              <tr><th>{this.state.txs.address}</th></tr>
              <tr><th>{received}</th></tr>
              <tr><th>{sent}</th></tr>
              <tr><th>{balance}</th></tr>
              <tr><th>{unconfirmed_balance}</th></tr>
              <tr><th>{final_balance}</th></tr>
              <tr><th>{this.state.txs.n_tx}</th></tr>
            </tc>
      </Table>
        {this.state.bool
          ? this.state.txs.txrefs.map((el) => {
            <Transaction el={el} />
          })
          : <h4>null</h4>
        }
    </div>
    );
  }
}
