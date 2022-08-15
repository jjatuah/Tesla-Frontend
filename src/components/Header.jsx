import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectProducts } from '../Cars/productSlice';
import { useSelector } from "react-redux";


const Header = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const products = useSelector(selectProducts);

  return ( 
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="Tesla Logo" />
      </a>
      <Menu>
        {products && products.map((product, index) => (
            <a key={index} href="#">{product}</a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu  onClick={()=> setBurgerMenu(true)} />
      </RightMenu>
      <BurgerNav show={burgerMenu}>
        <CloseWrapper>
            <CustomClose  onClick={()=> setBurgerMenu(false)} />
        </CloseWrapper>
        {products && products.map((product, index) => (
            <li><a key={index} href="#">{product}</a></li>
          ))}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade-In</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Powerwall</a></li>
        <li><a href="#">Commercial Energy</a></li>
      </BurgerNav>
    </Container>
   );
}
 
export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 20;
  list-style: none;
  padding: flex;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? "translateX(0)"  :  "translateX(100%)"};
  transition: transform 0.3s ease-in;

  li {
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);


    a{
      font-weight: 600;
    }
  }

  li:hover {
    background: grey;
    border-radius: 50px;
    opacity: 0.85;
    cursor: pointer;
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
  :hover {
    background: grey;
    border-radius: 10px;
    opacity: 0.85;
  }
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`