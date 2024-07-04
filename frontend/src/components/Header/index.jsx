import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { HeaderContainer, Logo, NavLinkGroup, StyledNavLink, LanguageSelector, DateLogoButtonContainer, LogoContainer, LogoImage, FixedNavLinkGroup, MiddleContainer, LanguageLink, FixedNavLink, Button } from './styles';
import germanylogo from "/logos/Germany.svg";

const Header = () => {
  const [currentDate, setCurrentDate] = useState('');
  const location = useLocation();
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('hr-HR', options);
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    setCurrentDate(formattedDate);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (location.pathname !== "/map") {
        setShowFixedNav(currentScrollY > 100);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/map") {
      setShowFixedNav(true);
    }
  }, [location]);

  return (
    <>
      {location.pathname !== "/map" && (
        <HeaderContainer>
          <LanguageSelector>
            <LanguageLink to="/eng">ENG</LanguageLink>
            <LanguageLink to="/de">DE</LanguageLink>
            <LanguageLink to="/hr">HR</LanguageLink>
          </LanguageSelector>

          <MiddleContainer>
            <DateLogoButtonContainer>
              <div className="date">{currentDate}</div>
              <LogoContainer>
                <LogoImage src={germanylogo} alt="Germany" />
                <Logo>DE Zeitung</Logo>
              </LogoContainer>
              <Button>Login</Button>
            </DateLogoButtonContainer>
          </MiddleContainer>
          
          <NavLinkGroup>
            <StyledNavLink to="/">News</StyledNavLink>
            <StyledNavLink to="/balkan">Balkan</StyledNavLink>
            <StyledNavLink to="/helpforforeigners">Help for Foreigners</StyledNavLink>
            <StyledNavLink to="/video">Video</StyledNavLink>
            <StyledNavLink to="/map">Map</StyledNavLink>
          </NavLinkGroup>
        </HeaderContainer>
      )}

      {showFixedNav && (
        <FixedNavLinkGroup show={showFixedNav}>
          <FixedNavLink to="/">News</FixedNavLink>
          <FixedNavLink to="/balkan">Balkan</FixedNavLink>
          <FixedNavLink to="/helpforforeigners">Help for Foreigners</FixedNavLink>
          <FixedNavLink to="/video">Video</FixedNavLink>
          <FixedNavLink to="/map">Map</FixedNavLink>
          <Button>Login</Button>
        </FixedNavLinkGroup>
      )}
    </>
  );
};

export default Header;
