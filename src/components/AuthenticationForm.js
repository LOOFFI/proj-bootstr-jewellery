import React from 'react';
import {Form,Button,Input} from 'reactstrap';
import { Redirect } from "react-router-dom";
import api from "../api";

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
      usernameActive: false,
      passwordActive: false
    };
  }

  activateUsername() {
    this.setState({
      usernameActive: true
    });
  }

  disableUsername(event) {
    if (event.target.value === "") {
      this.setState({
        usernameActive: false
      });
    }
  }

  activatePassword() {
    this.setState({
      passwordActive: true
    });
  }

  disablePassword(event) {
    if (event.target.value === "") {
      this.setState({
        passwordActive: false
      });
    }
  }

  updateUsername(event) {
    const { value } = event.target;
    this.setState({ userName: value });
  }

  updatepassword(event) {
    const { value } = event.target;
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    api
      .post("/login", this.state)
      
      .then(response => {
        console.log("Log in 👍", response.data);
        const { onLogin } = this.props;
        onLogin(response.data.userDoc);
      })
      .catch(err => {
        console.log(err);
        alert("ERROR Invalid Username or Password");
      });
  }

  render() {
    const { currentUser } = this.props;
    const { userName, password } = this.state;

    

    if (currentUser) {
      if (currentUser.isAdmin) {

        // ################### A CHANGER ###############################

        return <Redirect to="localhost:5000" target="_blank"/>
      }

      else return <Redirect to="/" />;
    }

    

    return (
      <section>
        <h2>LOG IN</h2>

        <Form onSubmit={event => this.handleSubmit(event)}>
          <div >
            <div >
              <label>
                username
              </label>
              <Input
                value={userName}
                type="string"
               
                onChange={event => this.updateUsername(event)}
                onFocus={() => this.activateUsername()}
                onBlur={event => this.disableUsername(event)}
              />
            </div>

            <div >
              <label
                
              >
                Password
              </label>
              <Input
                value={password}
                type="password"
                
                onChange={event => this.updatepassword(event)}
                onFocus={() => this.activatePassword()}
                onBlur={event => this.disablePassword(event)}
              />
            </div>
          </div>

          <Button>Log in</Button>
        </Form>
      </section>
    );
  }
}



  

 
export default Authentication;

