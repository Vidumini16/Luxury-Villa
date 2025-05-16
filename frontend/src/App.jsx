import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                  Luxury Villa
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Serendib Villa</h3>
                <p className="text-gray-400">
                  Experience the charm of Sri Lankan luxury living and warm hospitality.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>25 Galle Road, Bentota</li>
                  <li>Southern Province, Sri Lanka</li>
                  <li>Phone: +94 77 123 4567</li>
                  <li>Email: info@serendibvilla.lk</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                    {/* Facebook SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                    {/* Twitter SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.936 0 .39.045.765.127 1.124C7.728 8.86 4.1 6.884 1.671 3.965c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.014-.634A10.025 10.025 0 0 0 24 4.557z"/>
                    </svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                    {/* Instagram SVG */}
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.015 7.052.072 5.775.13 4.905.332 4.14.629c-.789.306-1.459.717-2.126 1.384C1.347 2.347.935 3.017.629 3.806.332 4.571.13 5.441.072 6.721.015 8.001 0 8.41 0 12c0 3.59.015 3.999.072 5.279.058 1.28.26 2.15.557 2.915.306.789.717 1.459 1.384 2.126.667.666 1.337 1.078 2.126 1.384.765.297 1.635.499 2.915.557C8.332 23.985 8.741 24 12 24s3.668-.015 4.948-.072c1.28-.058 2.15-.26 2.915-.557.789-.306 1.459-.718 2.126-1.384.666-.667 1.078-1.337 1.384-2.126.297-.765.499-1.635.557-2.915.057-1.28.072-1.689.072-5.279 0-3.59-.015-3.999-.072-5.279-.058-1.28-.26-2.15-.557-2.915-.306-.789-.718-1.459-1.384-2.126C21.653 1.347 20.983.935 20.194.629c-.765-.297-1.635-.499-2.915-.557C15.668.015 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Serendib Villa. All rights reserved. | Crafted in Sri Lanka 🇱🇰</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;