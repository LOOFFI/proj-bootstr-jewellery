import React from 'react';
import CollectionDts from './CollectionDts';
import {Container,Row,Col} from 'reactstrap';
import NavBarVerticOp from '../components/NavBarVerticOp';


class DiamondsCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      diamondsAlreadyOpen: true,
      path: "/en/diamonds",
    }
  }
  render() { 

    console.log(this.props.match)

   
    
    

    return ( 
      <main>
        <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVerticOp diamondsAlreadyOpen path="/en/diamonds"/>
          </Col>
          <Col md="8">
            <CollectionDts/>
          </Col>
        </Row>
      </Container>
      </main>
     );
    }
  
}
 
export default DiamondsCollection;