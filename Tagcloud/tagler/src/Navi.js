import React, { Component } from "react";
import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="danger" light expand="md" >
          <NavbarBrand href="/">Tag Frequincies</NavbarBrand>
          <NavbarToggler />
        </Navbar>
      </div>
    );
  }
}
