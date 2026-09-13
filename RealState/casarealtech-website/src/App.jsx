import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;

      case 'properties':
        return <PropertiesPage setCurrentPage={setCurrentPage} />;

      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;

      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;

      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;

      case 'privacy':
        return <PrivacyPage />;

      case 'terms':
        return <TermsPage />;

      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans text-gray-800 relative min-h-screen">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Floating WhatsApp Button */}
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