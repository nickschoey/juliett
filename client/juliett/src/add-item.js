import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      priceFiat: "",
      imageURL: ""
    }
  }

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value})
  }

  postEvent = () => {

    console.log(this.state.name);
    console.log(this.state.priceFiat);
    console.log(this.state.imageURL);

  // fetch(this.props.baseUrl+'/add-item', {
  //   method: 'POST',
  //   headers: {'content-type': 'application/json'},
  //   body: JSON.stringify({
  //     name: this.state.title,
  //     priceFiat: this.state.priceFiat,
  //     imageURL: this.state.imageURL,
  //   })
  // })
  // // .then(data => this.props.getAll())
  // .then(res => console.log(res.status))
  // .catch(err => console.error(err))

}

  render() {


    return (
    <div className="itemForm">
      <legend id="additem"><b>Add an item</b></legend>
      <Form>
        <div className="item-name">
          <FormGroup>
            <Label for="item">Item</Label>
            <Input onChange={this.handleChange}  type="text" name="name" id="name" placeholder="name of delicious pizza" />
          </FormGroup>
        </div>
        <div className="priceFiat">
          <FormGroup>
            <Label for="">Price in Euros</Label>
            <Input onChange={this.handleChange} type="number" name="priceFiat" id="priceFiat" placeholder="price of delicious pizza" />
          </FormGroup>
        </div>
        <div className="imageURL">
          <FormGroup>
            <Label for="">Image</Label>
            <Input onChange={this.handleChange} type="text" name="imageURL" id="imageURL" placeholder="url of image" />
          </FormGroup>
        </div>
        <Button onClick ={this.postEvent}>Submit</Button>
      </Form>
    </div>
    );
  }
}
