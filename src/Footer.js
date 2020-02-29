import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import clippy from './Images/clippy.png';

function Footer() {
  return (
    <Nav className="footer">
      <NavItem>
        <img width="60" src={clippy} style={{paddingTop: 10, paddingLeft: 10}}/>
      </NavItem>
      <NavItem>
        <NavLink disabled>Brought to you by BotAgainstBangs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://twitter.com/BotAgainstBangs">Clippy</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Fortunes</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Self-Guided</NavLink>
      </NavItem>
    </Nav>
  );
}

export default Footer;
