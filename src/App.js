import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import OurPhilosophy from './components/OurPhilosophy';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import DiamondsCollection from './components/DiamondsCollection';
import EmeraldsCollection from './components/EmeraldsCollection';
import RubiesCollection from './components/RubiesCollection';
import SapphiresCollection from './components/SapphiresCollection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Authentication from './components/AuthenticationForm';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }


  render() {

    const { currentUser } = this.state;
    
    return (
    <main>
      <header>
          <NavBar/> 
      </header>
          
      
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/en/philosophy" component={ OurPhilosophy }/>
              <Route path="/en/diamonds" component={ DiamondsCollection } />
              <Route path="/en/rubies" component={ RubiesCollection } />
              <Route path="/en/emeralds" component={ EmeraldsCollection } />
              <Route path="/en/sapphires" component={ SapphiresCollection } />
              <Route path="/contact" component={ ContactForm }/>
              {/* <Route path="/authentication" component={ Authentication } /> */}
              <Route exact path="/authentication" render={() => (<Authentication currentUser={currentUser} onLogin={userDoc => this.setState({ currentUser: userDoc })} />)}
          />
              <Route path='/admin' component={() => { window.location = 'http://localhost:5000'; return null;} }/>      
              <Route path="/notfound" component={ NotFound }/>
            </Switch>
      

      <Footer/>
      
    </main>
    );
  }
}

export default App;
