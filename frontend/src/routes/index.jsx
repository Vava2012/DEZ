import { BrowserRouter as RouterDOM, Routes, Route } from "react-router-dom";
import HomeNews from './HomeNews';
import Layout from "./Layout";
import Map from './Map';
import Foreigners from "./HelpForForeigners"


const Router = () => {
  return (
    <RouterDOM>
      <Routes>  
        <Route element={<Layout />}>
        <Route path="/" element={<HomeNews />} />
        <Route path="/map" element={<Map />} />
        <Route path="/helpforforeigners" element={<Foreigners />} />
        </Route>
      </Routes>
    </RouterDOM>
  );
}

export default Router;
