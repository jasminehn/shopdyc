import styled from "styled-components"
import { Link as LinkRouter } from "react-router-dom"
import { Link as LinkScroll } from "react-scroll"
import { MdSearch } from 'react-icons/md'

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 50px;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none; //do not display unless screen is mobile width

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  height: 80;
`

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid gainsboro;
  }
`

export const SearchWrapper = styled.div`
  width: 230px;
  margin-top: 20px;
`

export const SearchBar = styled.div`
  border-radius: 20px;
  background: white;
  width: 100%;
  display: flex;
  height: 35px;
  color: black;
`

export const SearchInput = styled.div`
  width: 100%;
  border-right: none;
  /* outline: none; */
  color: black;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #919191;
`

export const SearchButton = styled.div`
  /* width: 40px;
  height: 36px; */
  padding: 5px;
  text-align: center;
  cursor: pointer;
`

export const SearchIcon = styled(MdSearch)`
  font-size: 25px;
  color: black;
`