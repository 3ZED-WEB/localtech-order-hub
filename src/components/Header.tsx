
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Promotions', path: '/promotions' },
    { name: 'Gaming Tools', path: '/gaming-tools' },
    { name: 'Immersive Spaces', path: '/immersive-spaces' },
    { name: 'Professional Gamers', path: '/professional-gamers' },
    { name: 'Tournaments', path: '/tournaments' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-darker py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="text-red text-3xl font-bold">3</span>
            <span className="text-white text-2xl font-semibold">zedshop</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-light hover:text-white text-sm transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <SearchBar />
          </div>
          <Button variant="ghost" size="icon" aria-label="Search" className="md:hidden">
            <Search className="h-5 w-5 text-white" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
          <Button className="hidden md:flex bg-red hover:bg-red-light text-white">
            Get Now
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-darker p-4 md:hidden animate-fade-in">
          <div className="mb-4">
            <SearchBar />
          </div>
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-light hover:text-white text-sm py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-red hover:bg-red-light text-white mt-2 w-full">
              Get Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
