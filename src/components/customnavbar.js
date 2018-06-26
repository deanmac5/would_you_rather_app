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

import { connect } from 'react-redux';
import { unSetAuthedUser } from '../actions/authedUser';

class CustomNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  handleLogOff = (e) => {
    e.preventDefault()
    this.props.dispatch(unSetAuthedUser());
    
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Would You Rather?</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
         
              <NavItem>
                <NavLink href='/add'>Add Questions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='leaderboard'>Leaderboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>Logged:
                  Logged in 
                </DropdownToggle>
                <DropdownMenu className='push-right'>
             
                  <DropdownItem onClick={this.handleLogOff}>
                    Log Out
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

function mapStateToProps({ authedUser }) {
  return {authedUser: authedUser}
}

export default connect(mapStateToProps)(CustomNavBar);
