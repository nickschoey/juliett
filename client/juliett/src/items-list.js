import React from 'react'
import Item from './item'


class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
    }
  }

  getAll = () => {
    fetch(this.props.baseUrl+'/view-all')
    .then(res => res.json())
    .then(res => this.setState({items: res}))
    .then(res => console.log(res))
    .catch(err => console.error())
  }

  componentDidMount() {
    this.getAll()

  }


  render() {

    return (
        <div className="items">
          {this.state.items.length ?
            this.state.items.map( (el, i) =>
            <Item el={el}/>)
            : <h4>loading...</h4>}
          </div>

    )
  }





} export default ItemList
