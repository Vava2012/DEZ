import styled from 'styled-components';

export const MainSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 20px;
  margin-bottom: 20px;
  
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #d0d0d0;
  border-bottom: 1px solid #d0d0d0;
`;

export const GlobalContainerFirst = styled.div`
  display: flex;
  border: solid #d0d0d0;
  border-width: 1px 0;
  padding: 20px 0;
`;

export const MainSection = styled.div`
  flex: 74%;
  border-right: 1px solid #d0d0d0;
`;

export const GlobalAside = styled.div`
  flex: 26%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  & > .first {
    border-bottom: 1px solid #d0d0d0; 
    padding-bottom: 20px;
  }
`;

export const Pagesectionmain = styled.div`
  margin: 0px;
`;

export const ImageTextSection = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: top;
  gap: 20px; 
`;

export const Paragraph = styled.p`
  padding-right: 20px;
`;

export const SmallContainerFourArticlesHorizontal = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px; 
`;

export const SmallContainer = styled.div`
  display: flex;
  gap: 20px; 
  padding: 10px;
  border-left: 1px solid #d0d0d0;
  &:first-child {
    border-left: none; 
  }
`;



export const CategoryContainer = styled.div`
  display: flex;
  border: solid #d0d0d0;
  border-width: 1px 0;
  padding: 20px 0;
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
