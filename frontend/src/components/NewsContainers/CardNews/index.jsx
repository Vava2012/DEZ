import React, { useState, useEffect } from 'react';
import { BorderContainer, NewsContainer, NewsItem, NewsTitle, NewsImage } from './styles.jsx';

const dummyArticles = [
  { title: 'Naslov malo duzi nego ostali da stane u dva reda iiiiiiiiiiiii', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'Article Title 2', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'naslov test sadasda  asdadasdsa dadasdasdasd', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'Article Title 4' },
  { title: 'naslov u tri reda da vidimo kako djeluje sadasdasdasdsaddad dadadadsadsadasdsadadasdasdadasdadadadasd' },
  { title: 'Article Title 6' }
];

const dummyDataAside = [
  { id: 9, title: "Jamie Vardy is still a world class striker" },
  { id: 10, title: "Olympic games are knocking on the doors" },
  { id: 12, title: "When will Novak Djokovic come back?" },
  { id: 13, title: "Diego Simeone is on fire!" },
  { id: 14, title: "And the Golden ball goest to..." },
];

const CardNews = () => {
  const [newsAside, setNewsAside] = useState([]);

  useEffect(() => {
    setNewsAside(dummyDataAside);
  }, []);

  return (
    
   
      <BorderContainer>
      <NewsContainer>
        {dummyArticles.map((article, index) => (
          <NewsItem key={index}>
            {article.imageUrl && <NewsImage src={article.imageUrl} />}
            <NewsTitle>{article.title}</NewsTitle>
          </NewsItem>
        ))}
      </NewsContainer>
     </BorderContainer>
    
  );
};

export default CardNews;
