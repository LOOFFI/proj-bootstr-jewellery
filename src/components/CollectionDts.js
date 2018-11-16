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


class CollectionDts extends React.Component {
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
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1505686183080-0020a5979305?ixlib=rb-0.3.5&s=644f2c9cc3f3fa810439ecd40c7e91e0&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
              <CardBody>
                <CardTitle>Diamonds</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1512217358397-b68c2bc84682?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=43cf51052d74e8b1a012d869c014e7cd&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
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
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1503350659573-076be1027134?ixlib=rb-0.3.5&s=f1730244056c5521a2bc5c184adda656&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                <CardText>
                <small>small writting</small>
                </CardText>
              </CardBody>
          </Card>
          <Card className="m-3 shadow mb-5 bg-white rounded">
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1539050125830-eb92d115b2b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9549fceaffe7e42d301db481edad0eb6&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
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
 
export default CollectionDts;