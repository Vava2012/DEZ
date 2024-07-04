import styled from "styled-components";

export const BottomSliderContainer = styled.div`
  width: 1112px;
  height: 266px;
  position: relative;
  

  /* Horizontal line above the container */
  &::before {
    content: "Actual";
    position: absolute;
    left: 0;
    top: -22px;
    width: 100%;
    height: 1px;
    background-color: #000000;
  }

  .slick-prev,
  .slick-next {
    display: block;
    background: white; // White background for arrows
    width: 30px;
    height: 50px;
    z-index: 2;
    position: absolute;
    top: 35%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .slick-prev {
    left: 0px;
  }

  .slick-next {
    right: 0px;
  }

  .slick-prev:before {
    content: ''; // Clear the default arrow content
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="black" d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160C175.6 67.13 183.8 64 192 64s16.38 3.125 22.62 9.375c12.5 12.5 12.5 32.75 0 45.25L74.63 256l139.1 139.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  }

  .slick-next:before {
    content: ''; // Clear the default arrow content
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="black" d="M64 448c8.188 0 16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25l-160-160C80.38 67.13 72.19 64 64 64s-16.38 3.125-22.62 9.375c-12.5 12.5-12.5 32.75 0 45.25L181.4 256 42.38 395.4c-12.5 12.5-12.5 32.75 0 45.25C47.62 444.9 55.81 448 64 448z"/></svg>');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    pointer-events: none;
  }
`;

export const Slide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;   
  
`;

export const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

export const SlideTitle = styled.h3`
  color: #000000;
  text-align: center;
  overflow: hidden; /* Hide overflow */
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit to two lines */
  -webkit-box-orient: vertical; /* Ensure vertical orientation */
  max-height: 5em; /* Approximately two lines of text */
  text-overflow: ellipsis; /* Show ellipsis for overflow */
  margin: 0; /* Remove default margin */
  line-height: 1.8em; /* Adjust line-height as needed */
  height: 5em;
`;
