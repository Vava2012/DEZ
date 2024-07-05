import BottomSlider from '../../components/NewsContainers/Slider/index.jsx';
import CategoryNews from '../../components/NewsContainers/CategoryContainer/index.jsx';
import { MainContainer } from '../../globalstyles/index.jsx';

function HelpForForeigners () {
    return (
      <MainContainer>
        <CategoryNews />
        <BottomSlider />
        <CategoryNews />
      </MainContainer>
    );
  }
  
  export default HelpForForeigners;