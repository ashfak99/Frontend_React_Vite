import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#0B1120] min-h-screen text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;