import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div className="ml-5 mr-5">
        <Navbar color="light" light expand="md" className="border-bottom border-gray bg-white" style={{ height: 80 }}>

          <NavbarBrand href="/">R.J.</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml" navbar>
              <NavItem>
                <NavLink href="/">Rosaz Jewellery</NavLink>
              </NavItem>
              
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavLink href="/" >
                {/* free icon from font awesome */}
                <i className="fas fa-search"></i>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
