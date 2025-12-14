import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-footer border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Metaseclog Logo" 
                className="h-24 w-auto object-contain"
              />
              <span className="text-lg font-bold text-white font-heading">
                Metaseclog
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elite SOC Solutions & Cybersecurity Training. Building unbreakable security operations centers.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-heading text-sm tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/training" className="footer-link">
                  Training & Internships
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-heading text-sm tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              <li className="footer-link">SOC Consulting</li>
              <li className="footer-link">SOC Setup & Installation</li>
              <li className="footer-link">SOC Optimization</li>
              <li className="footer-link">Cybersecurity Training</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-heading text-sm tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:cn@taabow.com" className="hover:text-cyan-400 transition-colors">
                  cn@taabow.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+918925926240" className="hover:text-cyan-400 transition-colors">
                  +91 89259 26240
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>No,22 Lakshmi Nagar Pudukottai Road New Bus stand Thanjavur-613005, Tamil Nadu, India</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.linkedin.com/in/ks-prasanna" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@cybernanbanofficial?si=xIoWfDCAPz8BeP1S" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Metaseclog Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
