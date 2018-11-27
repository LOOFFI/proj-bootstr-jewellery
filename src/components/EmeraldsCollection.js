import React from 'react';
import CollectionEm from './CollectionEm';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class EmeraldsCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      emeraldsAlreadyOpen: true
     }
  }
  render() { 
    return ( 
      <main>
        <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVerticOp emeraldsAlreadyOpen path="/en/emeralds" />
          </Col>
          <Col md="8">
            <CollectionEm/>
          </Col>
        </Row>
      </Container>
      </main>
     );
  }
}
 
export default EmeraldsCollection;