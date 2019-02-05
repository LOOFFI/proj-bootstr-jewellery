import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import axios from 'axios';


class CollectionEm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      jewelCardArray: []
     }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/jewel')
      .then(response => {
        console.log('list of jewels', response.data)
        this.setState({jewelCardArray: response.data})
      })
      .catch(err => {
        console.log(err);
        alert("something wrong in the jewels request")
      })
  }

  render() { 

    const {jewelCardArray} = this.state;

    return ( 
      <Container fluid>
        
        
        <Row>{jewelCardArray.map(oneJewel =>
          
          <Col md="6">
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src={oneJewel.img} alt="Card image cap" />
              <CardBody>
                <CardTitle>{oneJewel.title}</CardTitle>
                <CardText>{oneJewel.description}</CardText>
                <CardText>{oneJewel.price}</CardText>
                <CardText>
                <small>{oneJewel.ref}</small>
                </CardText>
              </CardBody>
          </Card>

          </Col>
        )}
        </Row>
      </Container> 

    );
  }
}
 
export default CollectionEm;