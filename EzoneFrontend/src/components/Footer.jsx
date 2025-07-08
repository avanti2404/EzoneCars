import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-gray-300">
      <div className="containerr pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Ezone Cars</h3>
            <p className=" mb-4">
              Creating unforgettable travel experiences and helping you discover the world's most amazing destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Airport/Railway Station</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Local Sightseeing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Tour Packages</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Outstation Travels</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Corporate Car & Coach Rental</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span><a href="mailto:mail@ezonecars.in">mail@ezonecars.in</a></span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>9930066266, 9930066466, 9930066866</span>
              </li>
              <li className="flex items-center">
                {/* h-7 w-7 md:h-16 md:w-16 xl:h-10 xl:w-10 */}
                <MapPin size={32} className="mr-2" />
                <span>22 Vande Mataram CHS Mhada Colony,
                  Chandivali, Andheri (E), Mumbai 400072</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex justify-center items-center ">
            <p className="text-sm">© 2025 Ezonecars. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer