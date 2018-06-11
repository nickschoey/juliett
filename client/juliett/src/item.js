import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state ={

    }
  }

  handleClick = (e) => ({

  })


  render() {
    return (

      <div className='item' key={this.props.el._id}>
        <Card>
          <div className="image">
            <CardImg
              src={this.props.el.imageURL}
              top width="100%"
              alt="Card image cap"
            />
          </div>
          <CardBody>
            <CardTitle>{this.props.el.name}</CardTitle>
            <CardSubtitle>
                <div className="priceFiat">{this.props.el.priceFiat}</div>
                <div className="priceCryptocurrency">{this.props.el.priceCryptocurrency}</div>

            </CardSubtitle>
            <Button outline color="primary" onClick="">Purchase!</Button>
          </CardBody>
        </Card>
      </div>
    )

  }

}


export default Item
