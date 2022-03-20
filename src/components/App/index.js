// == npm import
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from 'src/components/Header';

// import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Error from 'src/components/Error';
import './style.scss';

// == Composant
function App() {
  useEffect(() => (
    window.scrollTo(0, 0)
  ), []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
