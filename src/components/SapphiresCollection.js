import React from 'react';
import CollectionJewels from './CollectionJewels';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class SapphiresCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sapphiresAlreadyOpen: true,
      gemstone: "sapphires"
     }
  }
  
  render() { 
    return ( 
      <main>
        <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVerticOp sapphiresAlreadyOpen path="/en/sapphires"/>
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
 
export default SapphiresCollection;