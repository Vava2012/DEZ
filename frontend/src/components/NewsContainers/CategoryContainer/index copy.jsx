import { useState, useEffect } from "react"
import 
{ MainSection, Paragraph, 
CategoryContainer, MainTop, MainMiddle, MainMiddleElement, 
MainBottom, Aside, AsideSmallContainer,
TextSection, ImageSection, CategoryModul } from './styles.jsx';
import { Category, CategoryHeading } from '../../../globalstyles/index.jsx';


const CategoryNews = () => {

  return (
<CategoryModul>
    
        <CategoryHeading>Sport</CategoryHeading>

        <CategoryContainer>
            <MainSection>
                <MainTop>
                    <TextSection>
                    <h3>Roko Simic se vraca u Dinamo?</h3>
                    <Category>HR | Sport</Category>
                    <Paragraph>DINAMO u ponedjeljak kreće s pripremama za novu sezonu. 
                        Sergej Jakirović će s momčadi prvih tjedan dana biti u Zagrebu, 
                        dok se svi ne skupe nakon Eura, a nakon toga će je povesti u Austriju.
                    </Paragraph> 
                    </TextSection>
                    <ImageSection>
                    <img src="/testslike/roko simic 580x393.webp" alt="NHL" />
                    </ImageSection>
                </MainTop>

                <MainMiddle>
                    <MainMiddleElement>
                        <img src="/testslike/115x86.webp" alt="France" />
                        <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                    </MainMiddleElement>
                    <MainMiddleElement>
                        <img src="/testslike/115x86.webp" alt="France" />
                        <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                    </MainMiddleElement>
                    <MainMiddleElement>
                        <img src="/testslike/115x86.webp" alt="France" />
                        <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                    </MainMiddleElement>
                </MainMiddle>

                <MainBottom>
                    <h3>The.</h3>
                    <h3>The Disruptors: The Mattel miracle maker, the moder.</h3>
                    <h3>The Disruptors: The Mattel miracle maker.</h3>
                    <h3>The Disruptors: </h3>
                </MainBottom>

            </MainSection>

            <Aside>
                <AsideSmallContainer>
                    <img src="/testslike/115x86.webp" alt="NHL" />
                    <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                </AsideSmallContainer>
                <AsideSmallContainer>
                    <img src="/testslike/115x86.webp" alt="NHL" />
                    <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                </AsideSmallContainer>
                <AsideSmallContainer>
                    <img src="/testslike/115x86.webp" alt="NHL" />
                    <h3>The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.</h3>
                </AsideSmallContainer>
            </Aside>
        </CategoryContainer>

    
</CategoryModul>
  )
}

export default CategoryNews;