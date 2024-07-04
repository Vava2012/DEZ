import React from 'react';
import { NewsContainer, NewsItem, NewsTitle, NewsImage } from './styles.jsx';


const dummyArticles = [
  { title: 'Naslov malo duzi nego ostali da stane u dva reda iiiiiiiiiiiii', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'Article Title 2', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'naslov test sadasda  asdadasdsa dadasdasdasd', imageUrl: '/testslike/nvidia280x158.webp' },
  { title: 'Article Title 4' },
  { title: 'naslov u tri reda da vidimo kako djeluje sadasdasdasdsaddad dadadadsadsadasdsadadasdasdadasdadadadasd' },
  { title: 'Article Title 6' }
];

const CardNews = () => (
  
  <NewsContainer>
    {dummyArticles.map((article, index) => (
      <NewsItem key={index}>
        {article.imageUrl && <NewsImage src={article.imageUrl} />}
        <NewsTitle>{article.title}</NewsTitle>
      </NewsItem>
    ))}
  </NewsContainer>
  
  
);

export default CardNews;