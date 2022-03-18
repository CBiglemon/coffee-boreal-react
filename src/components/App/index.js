// == Import
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// == Export
export default App;
