import React, { Component } from 'react';
import {
  Container,
  Row,
  Col} from 'reactstrap'

import Carousel3 from '../components/Carousel3'
import NavBarVertic from '../components/NavBarVertic';


class HomePage extends Component {
  
  render() {
    return (
      <Container fluid>
        
        
        <Row>
          <Col id="home-page-header" md="4">

            <NavBarVertic/>
          </Col>
          <Col md="6">
            <div className="ml-5 mr-5 mt-5">Depuis 1974, l'équipe Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eveniet sequi repellendus, dolores veniam voluptatibus laboriosam esse asperiores iste? Assumenda neque cum a eligendi ullam minus fugit repellat recusandae distinctio.</div>
            <Carousel3/>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default HomePage;