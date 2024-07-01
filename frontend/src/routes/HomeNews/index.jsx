import { useState, useEffect } from "react"
import { Category } from '../../globalstyles/index.jsx';
import { Container, FirstSectionLeft, FirstSectionRight, Pagesectionmain, ImageTextSection, Paragraph, SmallContainerFourArticlesHorizontal, SmallContainer, GlobalContainerFirst } from './styles.jsx';

const HomeNews = () => {

  return (
    <Container>
      <GlobalContainerFirst>
        <FirstSectionLeft>
        <Pagesectionmain>
        <h1 className="page-title">Roko Simic se vraca u Dinamo?</h1>
        <Category>HR | Sport</Category>
          <ImageTextSection>
          <img src="/testslike/roko simic 580x393.webp" alt="Lopta" />
          <Paragraph>DINAMO u ponedjeljak kreće s pripremama za novu sezonu. 
            Sergej Jakirović će s momčadi prvih tjedan dana biti u Zagrebu, 
            dok se svi ne skupe nakon Eura, a nakon toga će je povesti u Austriju.
          </Paragraph> 
          </ImageTextSection>
        </Pagesectionmain> 
      </FirstSectionLeft>

      <FirstSectionRight>
      <Pagesectionmain className="first">
          <ImageTextSection>
          <img src="/testslike/nvidia280x158.webp" alt="Nvidia" />
          </ImageTextSection>
          <h2 className="page-title">Nvidia graphic card</h2>
        <Category>NEWS |</Category>
        </Pagesectionmain>
        <Pagesectionmain>
          <ImageTextSection>
          <img src="/testslike/nvidia280x158.webp" alt="Nvidia" />
          </ImageTextSection>
          <h2 className="page-title">Nvidia graphic card</h2>
        <Category>NEWS |</Category>
        </Pagesectionmain>
      </FirstSectionRight>
      </GlobalContainerFirst>

      <SmallContainerFourArticlesHorizontal>
  <SmallContainer>
    <ImageTextSection>
      <img src="/testslike/france100px.webp" alt="France" />
      <h3 className="page-title">Victory of the extreme right, a big defeat for Macron.</h3>
    </ImageTextSection>
  </SmallContainer>
  <SmallContainer>
    <ImageTextSection>
      <img src="/testslike/france100px.webp" alt="France" />
      <h3 className="page-title">Victory of the extreme right, a big defeat for Macron.</h3>
    </ImageTextSection>
  </SmallContainer>
  <SmallContainer>
    <ImageTextSection>
      <img src="/testslike/france100px.webp" alt="France" />
      <h3 className="page-title">Victory of the extreme right, a big defeat for Macron.</h3>
    </ImageTextSection>
  </SmallContainer>
  <SmallContainer>
    <ImageTextSection>
      <img src="/testslike/france100px.webp" alt="France" />
      <h3 className="page-title">Victory of the extreme right, a big defeat for Macron.</h3>
    </ImageTextSection>
  </SmallContainer>
</SmallContainerFourArticlesHorizontal>

        
      
    </Container>
  
  )
}

export default HomeNews
