import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start; /* Align to the left */
  background-color: #d62222;
  max-width: 1200px;
  width: 74%;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

`;

export const NewsItem = styled.div`
  width: calc(33.333% - 10px);
  margin-bottom: 20px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;   
  
 
`;

export const NewsTitle = styled.h2`
  font-size: medium;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 5.4em; /* Adjust to fit the desired number of lines */
  margin: 0;
  line-height: 1.8em; /* Ensure this matches the desired line height */
`;

export const NewsImage = styled.img`
  width: 100%;
  height: auto;
`;