import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';


class CollectionRb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 

    

    return ( 
      <Container fluid>
        
        
        <Row>
          
          <Col md="6">
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Rubies</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>

          </Col>

          <Col md="6">  
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>


          </Col>

        </Row>
      </Container> 

    );
  }
}
 
export default CollectionRb;