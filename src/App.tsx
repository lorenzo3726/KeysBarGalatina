import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Experience from './components/Sections/Experience';
import Menu from './components/Sections/Menu';
import Gallery from './components/Sections/Gallery';
import Testimonials from './components/Sections/Testimonials';
import Info from './components/Sections/Info';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Menu />
      <Gallery />
      <Testimonials />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
