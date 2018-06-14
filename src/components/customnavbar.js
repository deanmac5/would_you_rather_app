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

// import { NavLink } from 'react-router-dom';
import React from 'react';

export default function CustomNavBar() {
    return (
        <div>
             <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar> */}
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/add'>Add</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='leaderboard'>Leaderboard</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
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
          {/* </Collapse> */}
        </Navbar>
      </div>




        // <nav className='nav'>
        //     <ul>
        //         <li>
        //             <NavLink to='/' exact activeClassName='active'>
        //                 Home
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink to='/add' exact activeClassName='active'>
        //                 Add
        //             </NavLink>
        //         </li>
        //         <li>
        //             <NavLink to='/leaderboard' exact activeClassName='active'>
        //                 Leaderboard
        //             </NavLink>
        //         </li>

        //     </ul>
        // </nav>
    );
}
