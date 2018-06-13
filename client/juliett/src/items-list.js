import React from 'react'
import Item from './item'
import PurchaseModal from './purchase-modal'



class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      modal: false,
      clickedItem: {},
      baseUrl: ""
    }
  }

  getAll = () => {
    fetch(this.props.baseUrl+'/view-all')
    .then(res => res.json())
    .then(res => this.setState({items: res}))
    .catch(err => console.error())
  }

  componentDidMount() {
    this.getAll()
    this.setState({baseUrl: this.props.baseUrl})

  }

  toggleModal = (item) => {
    this.setState({
      modal: !this.state.modal,
      clickedItem: item
    })
  }

  render() {

    return (
      <div className='body'>
        <div className="items">
          {this.state.items.length ?
            this.state.items.map( (el, i) =>
            <Item key={el._id} showModal={this.toggleModal} el={el}/>)
            : <h4>loading...</h4>}
        </div>
        <div className="modal">
          <PurchaseModal
            modal={this.state.modal}
            item={this.state.clickedItem}
            toggleModal={this.toggleModal}
            baseUrl={this.state.baseUrl}
          />
        </div>
      </div>

    )
  }





} export default ItemList
