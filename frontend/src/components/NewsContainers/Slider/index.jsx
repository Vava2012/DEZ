import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BottomSliderContainer,
  Slide,
  SlideImage,
  SlideTitle,
  CategoryHeading,
} from "./styles.jsx";


const BottomSlider = () => {
  const dummyData = [
    {
      id: 1,
      title: "ovo je test da vidimo kako radi na duzim recenicama",
      urlToImage: "/testslike/nvidia280x158.webp",
    },
    { id: 2, title: "Slide 2", urlToImage: "/testslike/nvidia280x158.webp" },
    { id: 3, title: "Slide 3", urlToImage: "/testslike/nvidia280x158.webp" },
    {
      id: 4,
      title:
        "idemo jako dugo napravit naslov da vidimo kako je kad je stvarno veliki naslov u pitanju test test test  test text ",
      urlToImage: "/testslike/druga slika.webp",
    },
    { id: 5, title: "Slide 5", urlToImage: "/testslike/france100px.webp" },
    { id: 6, title: "Slide 6", urlToImage: "/testslike/nvidia280x158.webp" },
    { id: 7, title: "Slide 7", urlToImage: "/testslike/nvidia280x158.webp" },
    { id: 8, title: "Slide 8", urlToImage: "/testslike/nvidia280x158.webp" },
    { id: 9, title: "Slide 9", urlToImage: "/testslike/nvidia280x158.webp" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: false,
    variableWidth: false,
    arrows: true,
    nextArrow: (
      <button onClick={() => sliderRef.current.slickNext()}>Next</button>
    ),
    prevArrow: (
      <button onClick={() => sliderRef.current.slickPrev()}>Prev</button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <BottomSliderContainer>
      
      <CategoryHeading>Sport</CategoryHeading>
      <Slider {...settings}>
        {dummyData.map((item) => (
          <Slide key={item.id}>
            <SlideImage src={item.urlToImage} alt={item.title} />
            <SlideTitle>{item.title}</SlideTitle>
          </Slide>
        ))}
      </Slider>
    </BottomSliderContainer>
  );
};

export default BottomSlider;
