import React from 'react';
import CollectionRb from './CollectionRb';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class RubiesCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rubiesAlreadyOpen: true
      }
  }
  render() { 
    return ( 
      <main>
      <Container fluid>
      
      
      <Row>
        <Col id="home-page-header" md="4">
          <NavBarVerticOp rubiesAlreadyOpen path="/en/rubies"/>
        </Col>
        <Col md="8">
          <CollectionRb/>
        </Col>
      </Row>
    </Container>
    </main>

     );
  }
}
 
export default RubiesCollection;