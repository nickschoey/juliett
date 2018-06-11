import React from 'react'
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
  DropdownItem } from 'reactstrap'



export default class Navigation extends React.Component {
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
        <span className="navbar">
          <Navbar color="light" light expand="md" >
            <NavbarBrand href="/home"><b>juliett.</b></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/home/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/accounts">Accounts</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Settings
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink href="/add-item">Add Item</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink href="/transaction-details">Recent Transaction Details</NavLink>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      sign out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </span>
      );
    }
  }
