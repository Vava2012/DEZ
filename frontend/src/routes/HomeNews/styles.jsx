import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GlobalContainerFirst = styled.div`
  display: flex;
  border: solid #d0d0d0;
  border-width: 1px 0;
  padding: 20px 0;
`;

export const FirstSectionLeft = styled.div`
  flex: 74%;
  border-right: 1px solid #d0d0d0;
`;

export const FirstSectionRight = styled.div`
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
  border-bottom: 1px solid #d0d0d0;
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

export const MainContainer = styled.main`
  background-color: white;
  max-width: 1200px;
  min-height: 1000px;
  width: 80%;
  height: 80%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto;
  
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`;