import React from 'react';
import CollectionJewels from './CollectionJewels';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class RubiesCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rubiesAlreadyOpen: true,
      gemstone: "rubies"
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
        <CollectionJewels gemstone={this.state.gemstone} />
        </Col>
      </Row>
    </Container>
    </main>

     );
  }
}
 
export default RubiesCollection;