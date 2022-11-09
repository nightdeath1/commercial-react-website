import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from '../../globalStyles';
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./NavbarElements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }
useEffect(() => {
  showButton()
}, []);

const toggleHome = () => {
  scroll.scrollToTop();
};

window.addEventListener('resize', showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={() => {
          toggleHome();
          closeMobileMenu();
        }}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/" onClick={toggleHome}>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" onClick={toggleHome}>Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={toggleHome}>Products</NavLinks>
              </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/sign-up'>
                  <Button primary>SIGN UP</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/sign-up'>
                  <Button fontBig primary>
                    SIGN UP
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
