import React from 'react';
import { Redirect } from "react-router-dom";
import ReCAPTCHA from 'react-google-recaptcha';
import {Button,Form,Input,FormGroup, Label} from 'reactstrap'
import api from '../api';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleCaptchaResponseChange = this.handleCaptchaResponseChange.bind(this);
    this.state = { 
      name: "",
      email:"",
      message:"",
      isSubmitSuccess: false,
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

  handleCaptchaResponseChange(response) {
    this.setState({
      recaptchaResponse: response,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('envoi submit')

    api.post("/contact", this.state)
      .then(response => {
      // console.log(response);
      if (response.data.msg === 'success') {
        alert("Votre message a bien été envoyé. Cliquez sur OK pour aller à l'accueil.");
        this.setState({isSubmitSuccess: true});
      }
      else {
        alert("PROBLEM")
      }
      })
      .catch(err => {
        console.log("ERROR", err);
      })
  }

  render() { 

    const {name,email,message,isSubmitSuccess} = this.state;

    if (isSubmitSuccess) {
      
      return <Redirect to="/" />
    }

    return ( 
      <main id="contact-position">
        <div className="h1 text-muted text-center">CONTACT US</div>
        <div className="container my-5 mx-auto">
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
          <FormGroup>
          <ReCAPTCHA
            ref={(el) => { this.recaptcha = el; }}
            sitekey="6Ldo4aYUAAAAAHYale41xu3L7t89iER2h9rhwJ4P"
            onChange={this.handleCaptchaResponseChange}
          />
          </FormGroup>
          <Button>Submit</Button>
        
        </Form>
        </div>
      </main>
     );
  }
}

 
export default ContactForm;