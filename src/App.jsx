import '../css/style.css';
import { Box } from '@chakra-ui/react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from './util/Navbar';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Product from './pages/Product';
import Contact from './pages/Contact';
import SkillContent from './pages/Skillls';
import Footer from './util/Footer';

function App() {
  aos.init({
    duration: 800
  })
  return (
      <div className="App">
        {/* <Sections /> */}
        <Navbar />
        <LandingPage />
        <About />
        <SkillContent />
        <Portfolio />
        <Product />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
