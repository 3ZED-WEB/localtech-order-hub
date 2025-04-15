
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darker text-gray-light pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <span className="text-red text-3xl font-bold">3</span>
              <span className="text-white text-2xl font-semibold">zedshop</span>
            </Link>
            <p className="mb-4">
              Your local destination for premium gaming and tech accessories. Fast delivery and top-quality products for gaming enthusiasts.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-light hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-light hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-light hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-light hover:text-white transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-light hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
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
                <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Kontakté Nu</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/headphones" className="hover:text-white transition-colors">Gaming Headphones</Link>
              </li>
              <li>
                <Link to="/category/controllers" className="hover:text-white transition-colors">Controllers</Link>
              </li>
              <li>
                <Link to="/category/keyboards" className="hover:text-white transition-colors">Keyboards</Link>
              </li>
              <li>
                <Link to="/category/mice" className="hover:text-white transition-colors">Gaming Mice</Link>
              </li>
              <li>
                <Link to="/category/accessories" className="hover:text-white transition-colors">Accessories</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Kontakté Nu</h3>
            <address className="not-italic">
              <p className="mb-2">3zed Street, Tech City</p>
              <p className="mb-2">Local Area, 12345</p>
              <p className="mb-2">
                <a href="tel:+1234567890" className="hover:text-white transition-colors">Phone: +123 456 7890</a>
              </p>
              <p>
                <a href="mailto:info@3zedshop.com" className="hover:text-white transition-colors">Email: info@3zedshop.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-dark/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 3zedshop. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
