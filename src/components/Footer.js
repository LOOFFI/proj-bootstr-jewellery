import React from "react";
import Moment from 'react-moment';
import {NavLink,Nav} from 'reactstrap'
import Clock from '../components/Clock.js'

function Footer() {

  const now = new Date();

  

  return (
    <section className="footer">
        <div>Welcome.inc</div>
        <Nav>
          
          <NavLink href="/authentication" className="text-white">
            sign in
          </NavLink>
                    
        </Nav>
      
        <Nav>  
          <Clock/>
        </Nav>
      
    </section>
  );
}

export default Footer;
