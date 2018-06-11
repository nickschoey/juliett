import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class PurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
      purchase: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  

  check() {
    fetch(this.props.baseUrl+'/checklast')
      .then(res => res.json())
      .then((res) => {
        if (res.value >=  )
      })
      .then(res => this.setState({items: res}))
      .then()
      .then(res => console.log(res))
      .catch(err => console.error())
    }

    this.setState({
      modal: !this.state.modal
    });
  }




  render() {
    return (
      <div>
        <Modal isOpen={this.state.modal} className="purchase_modal">
          <ModalHeader toggle={this.toggle}>Transaction has been</ModalHeader>
          <ModalBody>
            We will check if we've gotten a transaction.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.check}>Check Again</Button>{' '}
            <Button color="success" onClick={this.toggle}>Complete</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
