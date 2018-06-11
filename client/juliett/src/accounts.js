import React from 'react'
import { Table } from 'reactstrap'
import Account from './account'

export default class Accounts extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      receipts: []
    }
  }

  getAccounts = () => {
    fetch(this.props.baseUrl+'/view-receipts')
    .then(res => res.json())
    .then(res => this.setState({receipts: res}))
    .then(res => console.log(res))
    .catch(err => console.error())
  }

  componentWillMount() {
    this.getAccounts()

  }

    render() {
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price in Euro</th>
            <th>Price in Ether</th>
            <th>Exchange Rate</th>
            <th>Block</th>
            <th>tx hash</th>
          </tr>
        </thead>
        <tbody>
            {this.state.receipts.length ?
              this.state.receipts.map( (el, i) =>
              <Account el={el} i={i} />)
              : <h4>loading...</h4>}
        </tbody>
      </Table>
    );
  }
}
