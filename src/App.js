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


class App extends Component {




  render() {



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
              <Route path="/notfound" component={ NotFound }/>
            </Switch>
      


      {/* <footer>
          Made whith releaf...
      </footer> */}
    </main>
    );
  }
}

export default App;
