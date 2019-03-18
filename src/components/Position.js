import React from 'react';
import {
  Container,
  Row,
  Col 
} from 'reactstrap';
import NavBarVertic from "../components/NavBarVertic"

class Position extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col id="home-page-header" md="4">
              <NavBarVertic/>
          </Col>

          <Col md="8">
              <div className="map" id="map">map position</div>
              <div>Come to meet us in our showroom, 235 Faubourg Saint Honoré Street...</div>
          </Col>
        </Row>

      </Container>
    )
  }
}

export default Position;