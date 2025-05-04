import React, { useState, useEffect } from 'react';
import { Menu, X, Search, MessageSquare, Bell, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import Avatar from '../ui/Avatar';

interface HeaderProps {
  isLoggedIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-emerald-600">
              SAGE<span className="text-blue-600">+</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              How It Works
            </Link>
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Our Community
            </Link>
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Resources
            </Link>
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors">
              About Us
            </Link>
          </nav>

          {/* CTA / User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="text-gray-700 hover:text-emerald-600 transition-colors">
                  <Search size={20} />
                </button>
                <button className="text-gray-700 hover:text-emerald-600 transition-colors relative">
                  <MessageSquare size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    3
                  </span>
                </button>
                <button className="text-gray-700 hover:text-emerald-600 transition-colors relative">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    5
                  </span>
                </button>
                <Avatar src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" size="sm" status="online" />
              </>
            ) : (
              <>
                <Link to="/become-provider">
                  <Button variant="outline" size="sm">
                    Become a Provider
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button size="sm">Sign In</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                How It Works
              </Link>
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                Our Community
              </Link>
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                Resources
              </Link>
              <Link to="/" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                About Us
              </Link>
            </nav>
            <div className="flex flex-col space-y-3 pt-2 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" size="sm" />
                    <span className="text-gray-700 font-medium">Noah Wilson</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-emerald-600 transition-colors relative">
                      <MessageSquare size={20} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                    <button className="text-gray-700 hover:text-emerald-600 transition-colors relative">
                      <Bell size={20} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        5
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/become-provider">
                    <Button variant="outline" fullWidth>
                      Become a Provider
                    </Button>
                  </Link>
                  <Link to="/signin">
                    <Button fullWidth>Sign In</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;