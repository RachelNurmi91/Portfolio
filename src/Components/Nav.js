import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
  return (
    <Nav className="d-flex justify-content-between">
      <div>Rachel Nurmi</div>

      <div className="d-flex justify-content-between flex-row">
        <NavItem>
          <NavLink active href="#">
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem>
      </div>
    </Nav>
  );
};

export default Navigation;
