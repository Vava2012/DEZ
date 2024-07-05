import { useState, useEffect } from "react";
import {
  MainSection,
  Paragraph,
  CategoryContainer,
  MainTop,
  MainMiddle,
  MainMiddleElement,
  Aside,
  AsideSmallContainer,
  TextSection,
  ImageSection,
  CategoryModul,
} from "./styles.jsx";
import { Category, CategoryHeading } from "../../../globalstyles/index.jsx";

const dummyDataTop = [
  {
    id: 1,
    title: "A record holding year",
    image: "/testslike/santiago.webp",
    category: "HR | Sport",
    paragraph:
      "DINAMO u ponedjeljak kreće s pripremama za novu sezonu. Sergej Jakirović će s momčadi prvih tjedan dana biti u Zagrebu, dok se svi ne skupe nakon Eura, a nakon toga će je povesti u Austriju.",
  },
];

const dummyDataMiddle = [
  {
    id: 2,
    title: "The Disruptors: The Mattel miracle maker, the modern Babe Ruth, the street vendor avenger.",
    image: "/testslike/115x86.webp",
  },
  {
    id: 3,
    title: "The Disruptors: The Mattel miracle maker.",
    image: "/testslike/druga slika.webp",
  },
  {
    id: 4,
    title: "The Star: Guess who is back?",
    image: "/testslike/roko simic 580x393.webp",
  },
];

const dummyDataAside = [
  { id: 9, title: "Jamie Vardy is still a world class striker" },
  { id: 10, title: "Olympic games are knocking on the doors" },
  { id: 12, title: "When will Novak Djokovic come back?" },
  { id: 13, title: "Diego Simeone is on fire!" },
  { id: 14, title: "And the Golden ball goest to..." },

];

const dummyCategory = "Sport Highlights";

const CategoryNews = () => {
  const [newsTop, setNewsTop] = useState([]);
  const [newsMiddle, setNewsMiddle] = useState([]);
  const [newsAside, setNewsAside] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setNewsTop(dummyDataTop);
    setNewsMiddle(dummyDataMiddle);
    setNewsAside(dummyDataAside);
    setCategory(dummyCategory);
  }, []);

  return (
    <CategoryModul>
      <CategoryHeading>{category}</CategoryHeading>
      <CategoryContainer>
        <MainSection>
          <MainTop>
            {newsTop.map((item) => (
              <>
                <TextSection key={item.id}>
                  <h3>{item.title}</h3>
                  <Category>{item.category}</Category>
                  <Paragraph>{item.paragraph}</Paragraph>
                </TextSection>
                <ImageSection>
                  <img src={item.image} alt="NHL" />
                </ImageSection>
              </>
            ))}
          </MainTop>

          <MainMiddle>
            {newsMiddle.map((item) => (
              <MainMiddleElement key={item.id}>
                <img src={item.image} alt="France" />
                <h3>{item.title}</h3>
              </MainMiddleElement>
            ))}
          </MainMiddle>
        </MainSection>

        <Aside>
          {newsAside.map((item) => (
            <AsideSmallContainer key={item.id}>
              <h3>{item.title}</h3>
            </AsideSmallContainer>
          ))}
        </Aside>
      </CategoryContainer>
    </CategoryModul>
  );
};

export default CategoryNews;
