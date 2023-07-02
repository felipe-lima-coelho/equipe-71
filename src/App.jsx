import Router from './Router';
import Header from './components/Header';
import HeaderProvider from './context/contexts/HeaderProvider';
import Login from './screens/Login'

function App() {
  return (
    <HeaderProvider>
      <Header />
      <Router />
    </HeaderProvider>
  );
}

export default App;
