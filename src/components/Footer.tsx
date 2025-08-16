import React from "react";
import { Flower2, Star, Heart } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-8 group">
              <div className="relative">
                <div className="p-3 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl shadow-glow group-hover:shadow-strong transition-all duration-500 hover:scale-110">
                  <div className="relative">
                    <Flower2 className="h-7 w-7 text-white" />
                    <Star className="h-3 w-3 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Beauty Bliss
                </h3>
                <p className="text-sm text-gray-400">Premium Beauty Guide</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
              Your ultimate destination for beauty tips, skincare advice, and premium product
              recommendations. We curate the finest beauty products and share expert insights
              to help you look and feel your best.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-white flex items-center">
              <Heart className="h-5 w-5 mr-2 text-rose-400" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", page: "home" },
                { name: "Products", page: "products" },
                { name: "Articles", page: "articles" },
                { name: "About Us", page: "about" },
                { name: "Contact Us", page: "contact" }
              ].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-rose-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>


        </div>


      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Beauty Bliss. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#affiliate" className="hover:text-white transition-colors duration-300">
                  Affiliate Disclosure
                </a>
                <a href="#privacy" className="hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#terms" className="hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Affiliate Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 max-w-4xl mx-auto">
              <p className="text-xs text-gray-400 text-center leading-relaxed">
                <strong className="text-rose-400">Affiliate Disclaimer:</strong> Beauty Bliss is a participant in the Amazon Services LLC
                Associates Program, an affiliate advertising program designed to provide a means for sites to
                earn advertising fees by advertising and linking to Amazon.com. We may earn a small commission
                from qualifying purchases made through our links, at no additional cost to you. This helps us
                keep our content free and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
