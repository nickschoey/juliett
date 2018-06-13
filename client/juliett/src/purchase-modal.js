import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import giphy from './assets/giphy.gif'
import checky from './assets/checky.gif'
import fail from './assets/fail.gif'


export default class PurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purchase: false,
      tx: {},
      rate: 0,
      loadingImg: ""
    };
  }

  writeReceipt = () => {
    let priceFiatNum = Number(this.props.item.priceFiat.substring(2))
    console.log("price: ", priceFiatNum, "exchange rate: ", this.props.item.exchangeRate);
    let price_paid =this.state.tx.value

    return fetch(this.props.baseUrl+'/add-receipt', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        item: this.props.item.name,
        fiatUsed: "Euro",
        cryptocurrencyUsed: "Ether",
        priceFiat: priceFiatNum,
        pricePaid: price_paid,
        exchangeRate: this.props.item.exchangeRate,
        TimeStamp: new Date(),
        block: this.state.tx.block_height,
        hash: this.state.tx.tx_hash
      })
    })
    .then(() => this.setState({
      purchase: false,
      tx: {},
      rate: 0
    }))
    .then(res => console.log('item added'))
    }


  loading = () => {
    this.setState({loadingImg: giphy})
    setTimeout(() => {
      this.setState({loadingImg: fail})
    }, 10000)

  }




  check = () => {

    this.loading()

    let hashes = []
    fetch(this.props.baseUrl+'/view-receipts')
      .then(res => res.json())
      .then(res => {
        if (res.length) {
          res.forEach(el => {
            hashes.push(el.hash)
          })
        }
      })
      .then(() => console.log(hashes))

    return fetch(this.props.baseUrl+'/checklast')
      .then(res => res.json())
      .then(res => {
        res.some(el => {
          if (((this.props.item._priceCryptoNumber * 1.05) >= el.value && el.value >= (this.props.item._priceCryptoNumber* 0.95))
            && (el.tx_input_n === -1)
            && !(hashes.includes(el.tx_hash))
          ) {
            console.log('working thus far')
            this.setState({
              purchase: true,
              tx: el
            })
            return true
          } else {
            this.setState({
              purchase: false,
              tx: {}
            })
          }
        })

    //     if ((res.value >= this.props.item._priceCryptoNumber) && (res.tx_input_n === -1) && !(hashes.includes(res.tx_hash))) {
    //       console.log(res)
    //       this.setState({
    //         purchase: true,
    //         tx: res
    //       })
    //   } else {
    //     this.setState({
    //       purchase: false
    //   })
    // }
    })
  }

    finish = () => {
      if (this.state.purchase === true) {
        this.writeReceipt()
        this.props.toggleModal()
      } else {
        this.props.toggleModal()
      }
    }

  render() {
    return (
      <div>
        <Modal
          // onClosed={() => this.props.toggleModal(this.props.item)}
          // onExit={() => this.props.toggleModal(this.props.item)}
          onOpened={this.check}
          backdropTransition={{ timeout: 1300 }}
          modalTransition={{ timeout: 700 }}
          isOpen={this.props.modal}
          className="purchase_modal">
          <ModalHeader toggle={this.props.toggleModal}>transaction status...</ModalHeader>
          {
            this.state.purchase
              ? <ModalBody align='center'> <img width="400px" max alt="success" src={checky} /> </ModalBody> //  ??
              : <ModalBody align='center'> <img width="200px" alt="pending" src={this.state.loadingImg}/> </ModalBody>
          }
          <ModalFooter>
            <Button color="primary" onClick={this.check}>Check Again</Button>{' '}
            <Button color="success" onClick={this.finish}>Finish</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
