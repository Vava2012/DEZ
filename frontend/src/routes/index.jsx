import { BrowserRouter as RouterDOM, Routes, Route } from "react-router-dom";
import HomeNews from './HomeNews';
import Layout from "./Layout";
import Map from './Map';

const Router = () => {
  return (
    <RouterDOM>
      <Routes>  
        <Route element={<Layout />}>
        <Route path="/" element={<HomeNews />} />
        <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </RouterDOM>
  );
}

export default Router;
