import React, {useState} from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);


  return (
    <Container>
      <Logo>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
      </Logo>
      <Menu>
        <a href="">Model S</a>
        <a href="">Model Y</a>
        <a href="">Model 3</a>
        <a href="">Model X</a>
      </Menu>
      <RightMenu>
        <a href="">Shop</a>
        <a href="">Tesla Account</a>
        {/* Hamburger Menu */}
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadester</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 999;
  min-height: 60px;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.05);
`;
const Logo = styled.div``;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
transition: transform 0.2s;
  width: 300px;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  padding: 20px;
  text-align: start;
  border-radius: 5px;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
