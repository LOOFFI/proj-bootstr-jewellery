import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class NavBarVertic extends React.Component {

  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      toPath: "",
    };
  }

  
 

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toPath(event) {
    this.setState({
      toPath: event,
      isOpen:true
  })
  }
  
  render() {

    const {toPath,isOpen}=this.state;
    
    

    if (toPath==="/en/diamonds") {
      return <Redirect to="/en/diamonds" />;
    }

    if (toPath==="/en/emeralds") {
      return <Redirect to="/en/emeralds" />
    }

    if (toPath==="/en/rubies") {
      return <Redirect to="/en/rubies" />
    }

    if (toPath==="/en/sapphires") {
      return <Redirect to="/en/sapphires" />
    }

    return (
      <div id="home-page-header" className="ml-5">
      <Nav navbar>

        
        <NavLink href="/" className="text-muted-strong">
          <div className="hover-effect">
          <span>Home</span>
          </div>
        </NavLink>
        
        <NavLink href="/en/philosophy" className="text-muted-strong">
          <div className="hover-effect">Our Philosophy</div>
        </NavLink>

        
        <UncontrolledDropdown nav inNavbar>      
          <DropdownToggle nav className="text-muted-strong">
          <div className="hover-effect">Our Collection</div>
            <DropdownMenu right className="no-border">
              <DropdownItem className="hover-effect-sub" onClick={(event)=> this.toPath("/en/diamonds") }>
                Diamonds
              </DropdownItem>
              <DropdownItem className="hover-effect-sub" onClick={(event)=> this.toPath("/en/emeralds") }>
                Emeralds
              </DropdownItem>
              <DropdownItem className="hover-effect-sub" onClick={(event)=> this.toPath("/en/rubies") }>
                Rubies
              </DropdownItem>
              <DropdownItem className="hover-effect-sub" onClick={(event)=> this.toPath("/en/sapphires") }>
                Sapphires
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </UncontrolledDropdown>


        <NavLink href="/" className="text-muted-strong">
          
          <div className="hover-effect">Wedding</div>
        </NavLink>
        <NavLink href="/map" className="text-muted-strong">
          
          <div className="hover-effect">Our Showroom</div>
        </NavLink>

        {/* target="_blank " to open in a new tab */}
        <NavLink href="https://www.facebook.com/Bijouterie-Joaillerie-Vend%C3%B4me-540640659629081/" target="_blank" className="text-muted-strong">
          
        
          <div className="hover-effect"><i className="fab fa-facebook-f"></i></div>
        </NavLink>   
        <NavLink href="https://www.instagram.com/vendome.boutique/?hl=fr" target="_blank" className="text-muted-strong">
          
        
          <div className="hover-effect"><i className="fab fa-instagram"></i></div>
        </NavLink>
        <NavLink href="/contact" className="text-dark">
          <div className="hover-effect"><i className="fas fa-envelope"></i></div>
        </NavLink>

        
        
      </Nav>
      </div>
    )

  }

}