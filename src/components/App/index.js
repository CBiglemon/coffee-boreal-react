// == Import
import Header from 'src/components/Header';
// import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

// == Export
export default App;
