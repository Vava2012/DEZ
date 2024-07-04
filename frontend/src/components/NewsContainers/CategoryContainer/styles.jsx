import styled from 'styled-components';

export const NewsCategory = styled.div`
  
`;

export const MainSection = styled.div`
  flex: 74%;
  border-right: 1px solid #d0d0d0;
`;

export const CategoryType = styled.div`
  border-top: 1px solid #d0d0d0;
  padding: 10px 0;
  color: #005999;
  font-size: 20px;
  font-weight: 500;

`;

export const CategoryContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #d0d0d0;
  padding: 20px 0;
`;

export const Paragraph = styled.p`
  padding-right: 20px;
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
`;

export const ImageSection = styled.div`
display: flex;
flex-direction: row;
`;


export const MainMiddle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 20px 20px 20px;
  gap: 20px;
  max-width: 100%;

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
    border-bottom: 1px solid #d0d0d0;
  }
`;

export const MainMiddleElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px; 
  padding-left: 20px;
  border-left: 1px solid #d0d0d0;
  margin: 0 auto; 
  &:first-child {
    border-left: none; 
  }
`;



export const MainBottom = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: top; 
  padding-top: 20px;
  
  h3 {
    flex: 1; 
    text-align: center; 
    border-right: 1px solid #d0d0d0;
    padding: 0 10px;
  }

  h3:last-child {
    border-right: none; 
  }
`;



export const Aside = styled.div`
  flex: 26%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  text-align: center; 
  align-items: center;
`;

export const AsideSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; 

  &:not(:last-child) {
    border-bottom: 1px solid #d0d0d0;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%; 
  }

  margin-left: 20px;
`;





