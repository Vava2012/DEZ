import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, NavLinkGroup, StyledNavLink, LanguageSelector, DateLogoButtonContainer, LogoContainer, LogoImage, FixedNavLinkGroup, MiddleContainer } from './styles';
import germanylogo from "/logos/Germany.svg";

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('hr-HR', options);
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    setCurrentDate(formattedDate);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowFixedNav(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderContainer>
        <LanguageSelector>
          <StyledNavLink to="/eng">ENG</StyledNavLink>
          <StyledNavLink to="/de">DE</StyledNavLink>
          <StyledNavLink to="/hr">HR</StyledNavLink>
        </LanguageSelector>
        <MiddleContainer>
        <DateLogoButtonContainer>
        <div className="date">{currentDate}</div>
        <LogoContainer>
          <LogoImage src={germanylogo} alt="Germany" />
          <Logo>DE Zeitung</Logo>
        </LogoContainer>
        <button>Login</button>
        </DateLogoButtonContainer>
        </MiddleContainer>
        
        <NavLinkGroup>
          <StyledNavLink to="/">News</StyledNavLink>
          <StyledNavLink to="/germany">Germany</StyledNavLink>
          <StyledNavLink to="/balkan">Balkan</StyledNavLink>
          <StyledNavLink to="/helpforforeigners">Help for Foreigners</StyledNavLink>
          <StyledNavLink to="/video">Video</StyledNavLink>
          <StyledNavLink to="/map">Map</StyledNavLink>
        </NavLinkGroup>
        </HeaderContainer>
        {showFixedNav && (
        <FixedNavLinkGroup show={showFixedNav}>
          <StyledNavLink to="/">News</StyledNavLink>
          <StyledNavLink to="/germany">Germany</StyledNavLink>
          <StyledNavLink to="/balkan">Balkan</StyledNavLink>
          <StyledNavLink to="/helpforforeigners">Help for Foreigners</StyledNavLink>
          <StyledNavLink to="/video">Video</StyledNavLink>
          <StyledNavLink to="/map">Map</StyledNavLink>
        </FixedNavLinkGroup>
      )}
    </>
  );
};

export default Header;
