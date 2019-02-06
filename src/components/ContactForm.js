import React from 'react';
import {Button,Form,Input,FormGroup, Label} from 'reactstrap'


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      email:"",
      message:"",
     }
  }

  updateName(event) {
    const {value} = event.target;
    this.setState({name:value})
  }

  updateEmail(event) {
    const {value} = event.target;
    this.setState({email:value})
  }

  updateMessage(event) {
    const {value} = event.target;
    this.setState({message:value})
  }

  render() { 

    const {name,email,message} = this.state;

    return ( 
      <main id="contact-position">
        <Form onSubmit={event => this.handleSubmit(event)}>

          <FormGroup>
          <Label>NAME</Label>
          <Input type="text" placeholder="name" onChange={(event) => this.updateName(event)} value={name}/>
          </FormGroup>
          <FormGroup>
          <Label>EMAIL</Label>
          <Input type="email" placeholder="email" onChange={(event) => this.updateEmail(event)} value={email}/>
          </FormGroup>
          <FormGroup>
          <Label>MESSAGE</Label>
          <Input type="textarea" placeholder="message" onChange={(event) => this.updateMessage(event)} value={message}/>
          </FormGroup>
          <Button  email="looffi@club-internet.fr">Submit</Button>
        
        </Form>
      </main>
     );
  }
}

 
export default ContactForm;