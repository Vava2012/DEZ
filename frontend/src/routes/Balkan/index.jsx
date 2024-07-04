import CardNews from '../../components/NewsContainers/CardNews/index.jsx';
import BottomSlider from '../../components/NewsContainers/Slider/index.jsx';
import { Category, MainContainer } from '../../globalstyles/index.jsx' ;

function Balkan () {
    return (
      <MainContainer>
        <CardNews />
        <BottomSlider />
      </MainContainer>
    );
  }
  
  export default Balkan;