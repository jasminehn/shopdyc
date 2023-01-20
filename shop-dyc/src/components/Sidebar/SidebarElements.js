import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link as LinkScroll } from "react-scroll"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )}; //set visible if currently open, set invisible if not
  top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )}; //position at top of page if currently open, set outside if not
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const CloseIcon = styled(FaTimes)`
  color: #FFF;
`

export const SidebarWrapper = styled.div`
  color: #FFF;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  color: #FFF;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #a142f5;
    transition: 0.2s ease-in-out;
  }
`