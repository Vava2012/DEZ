import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const HeaderContainer = styled.header`
  max-width: 1200px;
  padding: 10px 20px ;
  background: #ffffff;
  width: 80%;
  height: 140px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  position: relative;
  // box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;


export const FixedNavLinkGroup = styled.div`
  max-width: 100%;
  width: 100%;
  height: 50px;
  align-items: center;
  gap: 30px;
  position: fixed;
  top: 0;
  left: 50%; 
  transform: translateX(-50%); 
  background: white;
  z-index: 1000;
  color: #333;
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center; 
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const MiddleContainer = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

export const DateLogoButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
`;

export const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px; 
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;


export const LogoImage = styled.img`
  height: 42px;
`;

export const Logo = styled.h1`
  font-family: var(--logo-font);
  color: black;
  font-size: 52px;
  letter-spacing: 1px;
  
`;

export const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 30px;
  top: 0;
  background: white;
  z-index: 1000;
`;


export const StyledNavLink = styled(NavLink)`
  color: #333;;
  text-decoration: none;
  font-size: 16px;


  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:active {
    color: #005999;
    text-decoration: none;
    cursor: pointer;
  }

`;


export const LanguageLink = styled(NavLink)`
  color: #333;;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:active {
    color: #005999;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const FixedNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  


  &:hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  &:active {
    color: #005999;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  color: #ffffff;
  background-color: #005999;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0078bf;
  }
`;