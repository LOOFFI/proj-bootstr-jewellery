import React from 'react';
import {Button,Form,Input,InputGroup} from 'reactstrap'


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
      <main>
        <Form onSubmit={event => this.handleSubmit(event)}>
        <InputGroup>
          <Input type="text" placeholder="name" onChange={(event) => this.updateName(event)} value={name}/>
          <Input type="email" placeholder="email" onChange={(event) => this.updateEmail(event)} value={email}/>
          <Input type="text" placeholder="message" onChange={(event) => this.updateMessage(event)} value={message}/>
          <Button  email="looffi@club-internet.fr">Submit</Button>
        </InputGroup>
        </Form>
      </main>
     );
  }
}

 
export default ContactForm;