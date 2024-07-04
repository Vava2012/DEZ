import { BrowserRouter as RouterDOM, Routes, Route } from "react-router-dom";
import HomeNews from './HomeNews';
import Balkan from './Balkan'
import Layout from "./Layout";
import Map from './Map';
import Video from './Video';
import Foreigners from "./HelpForForeigners"


const Router = () => {
  return (
    <RouterDOM>
      <Routes>  
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeNews />} />
          <Route path="balkan" element={<Balkan />} />
          <Route path="video" element={<Video />} />
          <Route path="map" element={<Map />} />
        <Route path="/helpforforeigners" element={<Foreigners />} />
        </Route>
        
      </Routes>
    </RouterDOM>
  );
}

export default Router;
