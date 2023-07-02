import Router from './Router';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderProvider from './context/contexts/HeaderProvider';

function App() {
  return (
    <HeaderProvider>
      <Header />
      <Router />
      <Footer />
    </HeaderProvider>
  );
}

export default App;
