import React from 'react';
import {
  Container,
  Row,
  Col 
} from 'reactstrap';
import NavBarVertic from "../components/NavBarVertic"

class OurPhilosophy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">
            <NavBarVertic/>
          </Col>
          <Col md="8">
            <div className="mx-auto">
              <img  width="80%" className="mx-5 pt-5 pb-5" src="https://images.unsplash.com/photo-1470321386428-4b1668f21ad3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f9915990bc1c4afc8e216b7887bfb754&auto=format&fit=crop&w=1050&q=80" alt="ring"/>
            </div>
            <div className="m-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fuga amet alias blanditiis soluta dicta ratione repellendus modi perferendis facere optio voluptates expedita id, autem saepe iste quisquam ipsa voluptatibus. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Col>
        </Row>
      </Container>
          
      
      );
  }
}
 
export default OurPhilosophy;