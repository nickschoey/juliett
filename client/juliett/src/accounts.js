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
    .catch(err => console.error())
  }

  componentWillMount() {
    this.getAccounts()

  }

    render() {
    return (
      <Table dark striped>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Name</th>
            <th>Price in Euro <i>( € )</i></th>
            <th>Price in Ether <i>( Ξ )</i></th>
            <th>Exchange Rate <i>( €/Ξ )</i></th>
            <th>Block</th>
            <th>tx hash</th>
          </tr>
        </thead>
        <tbody>
            {this.state.receipts.length ?
              this.state.receipts.map( (el, i) =>
              <Account el={el} i={i} />)
              : <h4>null</h4>}
        </tbody>
      </Table>
    );
  }
}
