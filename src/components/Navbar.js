import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: white;
  border-bottom: 1px solid #eee;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavRight = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/">LOGO</Link>
      <NavLinks>
        <Link to="/shop">SHOP</Link>
        <Link to="/skills">SKILLS</Link>
        <Link to="/stories">STORIES</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT US</Link>
      </NavLinks>
      <NavRight>
        <select>
          <option>ENG</option>
        </select>
        <button>♡</button>
        <button>🛒</button>
        <button>👤</button>
      </NavRight>
    </Nav>
  );
}

export default Navbar;