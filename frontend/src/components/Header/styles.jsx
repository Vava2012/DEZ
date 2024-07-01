import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  max-width: 1200px;
  background: #ffffff;
  width: 100%;
  height: 100px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  margin-bottom: 60px;
  position: relative;
  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -5px;
    border-bottom: 1px solid black;
  }
  &:after {
    bottom: -34px;
  }
  &:before {
    bottom: -37px;
  }
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
  gap: 20px; 
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
  letter-spacing: 1.5px;
  
`;

export const NavLinkGroup = styled.div`
  display: flex;
  align-items: center;
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
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;


