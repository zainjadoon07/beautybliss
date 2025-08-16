import React, {  useState, useEffect } from 'react';
import { Menu, X, Flower2, Star } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-strong border-b border-gray-100/50' 
        : 'bg-white/80 backdrop-blur-lg shadow-soft'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 p-3 rounded-2xl shadow-glow group-hover:shadow-strong transition-all duration-500 hover:scale-110">
                <div className="relative">
                  <Flower2 className="h-7 w-7 text-white" />
                  <Star className="h-3 w-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            </div>
            <div className="text-reveal">
              <h1 className="text-3xl font-bold gradient-text-primary">
                Beauty Bliss
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Premium Beauty Guide</p>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { name: 'Home', page: 'home' },
              { name: 'About Us', page: 'about' },
              { name: 'Articles', page: 'articles' },
              { name: 'Contact Us', page: 'contact' }
            ].map((item) => (
              <button 
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 focus-ring ${
                  currentPage === item.page 
                    ? 'text-white bg-gradient-to-r from-rose-500 to-pink-500 shadow-glow' 
                    : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                }`}
              >
                {item.name}
                {currentPage === item.page && (
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl blur opacity-20"></div>
                )}
              </button>
            ))}
          </nav>



          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 focus-ring ${
                isMenuOpen 
                  ? 'bg-rose-500 text-white shadow-glow' 
                  : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-fade-in-down">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-200/50 rounded-b-2xl shadow-strong">
              {[
                { name: 'Home', page: 'home' },
                { name: 'About Us', page: 'about' },
                { name: 'Articles', page: 'articles' },
                { name: 'Contact Us', page: 'contact' }
              ].map((item, index) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium focus-ring ${
                    currentPage === item.page 
                      ? 'text-white bg-gradient-to-r from-rose-500 to-pink-500 shadow-glow' 
                      : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;