
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div>
          <Header></Header>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Services></Services>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
    </div>
  );
}

export default App;
