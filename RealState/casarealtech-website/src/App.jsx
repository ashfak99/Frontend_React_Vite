import { Routes, Route } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

// Placeholder pages (baad mein banayenge)
const Properties = () => <div className="p-20 text-center">Properties Page</div>;
const About = () => <div className="p-20 text-center">About Page</div>;
const Services = () => <div className="p-20 text-center">Services Page</div>;
const Contact = () => <div className="p-20 text-center">Contact Page</div>;

function App() {
  return (
    <div className="font-sans text-gray-800 relative">
      {/* Navbar - Har page par dikhega */}
      <Navbar />

      {/* Main Content - Route ke hisaab se change hoga */}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="properties" element={<Properties />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer - Har page par dikhega */}
      <Footer />

      {/* Floating WhatsApp Button - Har page par bottom-right corner par dikhega */}
      <a
        href="https://wa.me/919830334567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
      >
        <FaWhatsapp size={26} />
      </a>
    </div>
  );
}

export default App;