import { useState, useEffect } from "react"
import { Category, MainContainer } from '../../globalstyles/index.jsx';
import 
{ Container, MainSection, GlobalAside, Pagesectionmain, 
  ImageTextSection, Paragraph, SmallContainerFourArticlesHorizontal, 
  SmallContainer, GlobalContainerFirst, CategoryContainer, 
  MainTop, MainMiddle, MainMiddleElement, MainBottom, Aside, AsideSmallContainer,
  TextSection, ImageSection } from './styles.jsx'
  import { BottomSliderContainer } from "../../components/NewsContainers/Slider/styles.jsx";
import CardNews from "../../components/NewsContainers/CardNews/index.jsx";
import BottomSlider from "../../components/NewsContainers/Slider/index.jsx";

const HomeNews = () => {

  return (
    <MainContainer>
    <Container>
      <GlobalContainerFirst>
        <MainSection>
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
      </MainSection>

      <GlobalAside>
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
      </GlobalAside>
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
    <CardNews />
    <BottomSlider />
    </MainContainer>
  
  )
}

export default HomeNews
