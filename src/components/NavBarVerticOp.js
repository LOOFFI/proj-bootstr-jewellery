import React from 'react';
import {Redirect} from 'react-router-dom';
import {
  Nav,
  NavLink,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

export default class NavBarVerticOp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      toPath: "/",
    };
  }

  toPath(event) {
    this.setState({
      toPath: event,
    })
  }
  
  render() {

    const {toPath,isOpen}=this.state;
    
    // to verify the props
    // console.log(toPath,isOpen)
    // console.log(this.props)

    if (toPath==="/en/diamonds"&&isOpen===false&&this.props.path!=="/en/diamonds") {
      return <Redirect to="/en/diamonds" />
    }

    if (toPath==="/en/emeralds"&&isOpen===false&&this.props.path!=="/en/emeralds") {
      return <Redirect to="/en/emeralds" />
    }

    if (toPath==="/en/rubies"&&isOpen===false&&this.props.path!=="/en/rubies") {
      return <Redirect to="/en/rubies" />
    }

    if (toPath==="/en/sapphires"&&isOpen===false&&this.props.path!=="/en/sapphires") {
      return <Redirect to="/en/sapphires" />
    }
    
   

    return (
      <div id="home-page-header" className="ml-5">
      <Nav navbar>

        
        <NavLink href="/" className="text-muted-strong">
          
          <div className="hover-effect">Home</div>
        </NavLink>
        
        <NavLink href="/en/philosophy" className="text-muted-strong">
          
          <div className="hover-effect">Our Philosophy</div>
        </NavLink>

        
        <UncontrolledDropdown nav inNavbar isOpen>      
          <DropdownToggle nav className="text-muted-strong">
          <div className="hover-effect">Our Collection</div>
            <DropdownMenu right className="no-border ">
              <DropdownItem className="hover-effect-sub btn bg-white shadow-sm rounded" disabled={this.props.diamondsAlreadyOpen} onClick={(event)=> this.toPath("/en/diamonds") }>
                Diamonds
              </DropdownItem>
              <DropdownItem className="hover-effect-sub btn bg-white shadow-sm rounded" disabled={this.props.emeraldsAlreadyOpen} onClick={(event)=> this.toPath("/en/emeralds") }>
                Emeralds
              </DropdownItem>
              <DropdownItem className="hover-effect-sub btn bg-white shadow-sm rounded" disabled={this.props.rubiesAlreadyOpen} onClick={(event)=> this.toPath("/en/rubies") }>
                Rubies
              </DropdownItem>
              <DropdownItem className="hover-effect-sub btn bg-white shadow-sm rounded" disabled={this.props.sapphiresAlreadyOpen} onClick={(event)=> this.toPath("/en/sapphires") }>
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

        <NavLink href="localhost:5000" target="_blank" className="text-dark">
          admin
        </NavLink>
        
      </Nav>
      </div>
    )

  }

}