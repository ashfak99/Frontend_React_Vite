import { Link } from 'react-router-dom';
import { 
  FaHome, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube 
} from 'react-icons/fa';

const Footer = () => {
  // Quick Links ka data
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Social links ka data
  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://facebook.com', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', name: 'Instagram' },
    { icon: <FaLinkedinIn />, url: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: <FaYoutube />, url: 'https://youtube.com', name: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0B1B32] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Grid */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5 text-white">
              <div className="text-amber-500 text-3xl">
                <FaHome />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-wide">Casa Realtech</h2>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Private Limited
                </p>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your trusted partner for premium real estate solutions in Kolkata. 
              We help you find the perfect property for your needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-amber-500"></span>
            </h3>
            <ul className="space-y-3 text-sm mt-6">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-amber-500 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-amber-500"></span>
            </h3>
            <p className="text-sm text-gray-400 mt-6 mb-5">
              Stay connected with us on social media for updates and insights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-[#0B1B32] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-10 h-[2px] bg-amber-500"></span>
            </h3>
            <ul className="space-y-4 text-sm mt-6">
              
              {/* Phone */}
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:+919830334567" className="hover:text-amber-500 transition block">
                    +91 98303 34567
                  </a>
                  <a href="tel:+919876543210" className="hover:text-amber-500 transition block">
                    +91 98765 43210
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@casarealtech.com" className="hover:text-amber-500 transition block">
                    info@casarealtech.com
                  </a>
                  <a href="mailto:sales@casarealtech.com" className="hover:text-amber-500 transition block">
                    sales@casarealtech.com
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  Tower 5A-303, Ecospace Business Tower,<br />
                  Action Area II, Newtown,<br />
                  Kolkata - 700156
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Casa Realtech Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-amber-500 transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-amber-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;