import React, {useState, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons/lib";
import {Button} from "../../globalStyles";
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
 NavBtnLink,
} from "./Navbar.elements";

// eslint-disable-next-line no-undef

function Navbar() {
 const [click, setClick] = useState(false);
 const [button, setButton] = useState(true);

 const handleClick = () => setClick(!click);
 const closeMobileMenu = () => setClick(false);

 const showButton = () => {
  if (window.innerWidth <= 960) {
   setButton(false);
  } else {
   setButton(true);
  }
 };

 useEffect(() => {
  showButton();
 }, []);

 window.addEventListener(`"resize"`, showButton);

 return (
  // eslint-disable-next-line react/jsx-filename-extension,react/jsx-no-constructed-context-values
  <IconContext.Provider value={{color: "blue"}}>
   <Nav>
    <NavbarContainer>
     <NavLogo to="/" onClick={closeMobileMenu}>
      <NavIcon/>
      EQG
     </NavLogo>
     <MobileIcon onClick={handleClick}>
      {click ? <FaTimes/> : <FaBars/>}
     </MobileIcon>
     <NavMenu onClick={handleClick} click={click}>
      <NavItem>
       <NavLinks to="/">Home</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks to="/student">Student</NavLinks>
      </NavItem>
      <NavItem>
       <NavLinks to="/teacher">Teacher</NavLinks>
      </NavItem>
      <NavItemBtn>
       {button ? (
        <NavBtnLink to="/sign-in">
         <Button primary>Sign in</Button>
        </NavBtnLink>
       ) : (
        <NavBtnLink to="/sign-in">
         <Button fontBig primary>
          Sign in
         </Button>
        </NavBtnLink>
       )}
      </NavItemBtn>
     </NavMenu>
    </NavbarContainer>
   </Nav>
  </IconContext.Provider>
 );
}

export default Navbar;
