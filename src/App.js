
import './App.css';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
          <Header></Header>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Footer></Footer>
    </div>
  );
}

export default App;
