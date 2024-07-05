import CategoryNews from '../../components/NewsContainers/CategoryContainer/index.jsx';
import BottomSlider from '../../components/NewsContainers/Slider/index.jsx';
import { MainContainer } from '../../globalstyles/index.jsx' ;

function Balkan () {
    return (
      <MainContainer>
        <CategoryNews />
        <BottomSlider />
      </MainContainer>
    );
  }
  
  export default Balkan;