import BottomSlider from '../../components/NewsContainers/Slider/index.jsx';
import CategoryNews from '../../components/NewsContainers/CategoryContainer/index.jsx';
import { MainContainer } from '../../globalstyles/index.jsx';
import SmallContainerFourArticles from '../../components/NewsContainers/SmallContainerFourArticlesHorizontal/index.jsx';

function HomeNews () {
    return (
      <MainContainer>
        <CategoryNews />
        <SmallContainerFourArticles />
        <CategoryNews />
        <BottomSlider />
      </MainContainer>
    );
  }
  
  export default HomeNews;