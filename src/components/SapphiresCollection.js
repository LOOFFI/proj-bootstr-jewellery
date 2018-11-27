import React from 'react';
import CollectionSap from './CollectionSap';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class SapphiresCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      alreadyOpen: true
     }
  }
  render() { 
    return ( 
      <main>
        <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVerticOp alreadyOpen path="/en/sapphires"/>
          </Col>
          <Col md="8">
            <CollectionSap/>
          </Col>
        </Row>
      </Container>
      </main>
     );
  }
}
 
export default SapphiresCollection;