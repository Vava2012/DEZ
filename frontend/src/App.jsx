import { GlobalStyle, MainContainer } from './globalstyles';
import Router from './routes';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Router />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
