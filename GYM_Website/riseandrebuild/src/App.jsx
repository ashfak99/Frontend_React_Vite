// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Membership from './components/Membership';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white font-sans antialiased scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Membership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}