import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown
} from 'reactstrap';
import React, { Component } from 'react';

class CustomNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
  return(
        <div>
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">WYR?</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className="ml-left" navbar>

        <NavItem>
          <NavLink href='/add'>Add Questions</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='leaderboard'>Leaderboard</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Logged in as: 
                </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
                  </DropdownItem>
            <DropdownItem>
              Option 2
                  </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
                  </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
    </Navbar>
      </div >

    );
}
}

export default CustomNavBar;
