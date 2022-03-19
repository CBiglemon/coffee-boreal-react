// == Import
import { useEffect } from 'react';
import Header from 'src/components/Header';
// import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import './style.scss';

// == Composant
function App() {
  useEffect(() => (
    window.scrollTo(0, 0)
  ), []);

  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

// == Export
export default App;
