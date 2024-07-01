import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";

const Layout = () => {
  const location = useLocation();
  const isMapPage = location.pathname === '/map'; 

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
