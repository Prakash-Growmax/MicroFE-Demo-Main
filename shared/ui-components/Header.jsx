import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0070f3;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #495057;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #0070f3;
  }
`;

export const Header = ({ appName, navLinks, isAuthenticated, onLogout }) => {
  return (
    <StyledHeader>
      <Logo>{appName}</Logo>
      <Nav>
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path}>
            {link.label}
          </NavLink>
        ))}
        {isAuthenticated ? (
          <NavLink as="button" onClick={onLogout}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </Nav>
    </StyledHeader>
  );
};
