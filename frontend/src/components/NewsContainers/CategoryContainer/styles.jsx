import styled from 'styled-components';


export const CategoryModul = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d0d0d0;
  padding: 20px 20px 0px 20px;
  
`;

export const CategoryContainer = styled.div`
display: flex;
flex-direction: row;
padding: 10px 10px 0px 0px;
border-top: 1px solid #d0d0d0;
`;

export const MainSection = styled.div`
  flex: 74%;
  border-right: 1px solid #d0d0d0;
`;

export const MainTop = styled.div`
display: flex;
flex-direction: row;
border-right: solid #d0d0d0;
border-width: 1px 0;
padding: 0px 20px 20px 0px;
gap: 20px;
max-width: 100%;
`;

export const TextSection = styled.div`
flex: 35%;
font-size: 18px;

h3 {
    font-size: 28px;
    margin-bottom: 10px;
  }
`;

export const ImageSection = styled.div`
  flex: 65%; 
  display: flex;
  flex-direction: row;
  img {
    width: 100%;
    height: auto; 
    object-fit: cover;
  }
`;

export const Paragraph = styled.p`
  padding-right: 20px;
  margin-top: 20px;;
`;


export const MainMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: top;
  align-items: center;
  position: relative;
  padding: 20px 20px 20px 20px;
  max-width: 100%;
  height: 280px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 98%; 
    border-top: 1px solid #d0d0d0;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 98%; 
    
  }
`;

export const MainMiddleElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 5px;
  font-size: 14px;
  border-left: 1px solid #d0d0d0;
  margin: 0 auto; 
  height: 260px; 
  width: 33%; 
  &:first-child {
    border-left: none; 
  }

  img {
    width: 100%;
    height: 150px; 
    object-fit: cover;
    margin-bottom: 20px;
  }
`;


export const Aside = styled.div`
  flex: 26%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 30px;

   
`;

export const AsideSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 60px;
  padding: 0px 0% 0px 0px;
  font-size: 16px;
  font-weight: 900;
  margin: 0 auto; 
  position: relative; 
  border-bottom: 1px solid #d0d0d0; 
  width: 100%; 
`;








