import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUpButton from './components/Scroll-btn';
import './index.css'
import * as $ from "jquery"

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default App;

