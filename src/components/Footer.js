import React from "react";
import Moment from 'react-moment';

function Footer() {

  const now = new Date();

  return (
    <section className="footer">
        <div>Welcome.inc</div>
        <Moment interval={60000} format="DD-MM-YYYY HH:mm:ss">
          {now}
        </Moment>
      
    </section>
  );
}

export default Footer;
