import React from "react";
import Moment from 'react-moment';
import {NavLink,Nav} from 'reactstrap'

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
        <Moment interval={60000} format="DD-MM-YYYY HH:mm:ss">
          {now}
        </Moment>
      
    </section>
  );
}

export default Footer;
