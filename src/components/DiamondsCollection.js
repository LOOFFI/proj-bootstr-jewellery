import React from 'react';
import CollectionJewels from './CollectionJewels';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class DiamondsCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      diamondsAlreadyOpen: true,
      gemstone: "diamonds",
      path: "/en/diamonds",
    }
  }
  render() { 

       

    return ( 
      <main>
        <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVerticOp diamondsAlreadyOpen path="/en/diamonds"/>
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
 
export default DiamondsCollection;