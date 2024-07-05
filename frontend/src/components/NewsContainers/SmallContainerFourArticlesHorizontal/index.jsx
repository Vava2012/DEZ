import { useState, useEffect } from "react";
import { Category, CategoryHeading } from "../../../globalstyles/index.jsx";
import { Container, ImageTextSection, SmallContainerFourArticlesHorizontal, SmallContainer, MainSmallContainer } from './styles.jsx';

const dummyDataSmallContainer = [
  {
    id: 1,
    title: "Victory of the extreme right, a big defeat for Macron.",
    image: "/testslike/france100px.webp",
  },
  {
    id: 2,
    title: "Victory of the extreme right, a big defeat for Macron.",
    image: "/testslike/france100px.webp",
  },
  {
    id: 3,
    title: "Victory of the extreme right, a big defeat for Macron.",
    image: "/testslike/france100px.webp",
  },
  {
    id: 4,
    title: "Victory of the extreme right, a big defeat for Macron.",
    image: "/testslike/france100px.webp",
  },
];

const dummyCategory = "Sport Highlights";

const SmallContainerFourArticles = () => {
  const [newsSmallContainer, setNewsSmallContainer] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    setNewsSmallContainer(dummyDataSmallContainer);
    setCategory(dummyCategory);
  }, []);

  return (
    <MainSmallContainer>
      <CategoryHeading>{category}</CategoryHeading>
      <Container>
        <SmallContainerFourArticlesHorizontal>
          {newsSmallContainer.map((item) => (
            <SmallContainer key={item.id}>
              <ImageTextSection>
                <img src={item.image} alt="France" />
                <h3 className="page-title">{item.title}</h3>
              </ImageTextSection>
            </SmallContainer>
          ))}
        </SmallContainerFourArticlesHorizontal>        
      </Container>
    </MainSmallContainer>
  )
}

export default SmallContainerFourArticles;
