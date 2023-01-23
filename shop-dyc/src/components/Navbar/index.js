import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
   SearchBar, SearchInput, SearchButton, SearchWrapper, SearchIcon } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="order">Order Online</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="faq">FAQ</NavLinks>
            </NavItem>
          </NavMenu>
          <NavLogo to='/'>dyc.</NavLogo>
          <SearchWrapper>
            <SearchBar>
              <SearchButton>
                <SearchIcon></SearchIcon>
              </SearchButton>
              <SearchInput>Search</SearchInput>
            </SearchBar>
          </SearchWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;