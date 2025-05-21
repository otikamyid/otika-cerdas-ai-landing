
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="https://otika.biz.id/wp-content/uploads/2024/09/cropped-OTIKA-2.png"
                alt="Otika Cerdas Indonesia"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Fitur
              </a>
              <a href="#services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Layanan
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Harga
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Testimoni
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
              <a
                href="https://wa.me/6285117202425"
                className="btn-primary ml-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <a
              href="#features"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Fitur
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Harga
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://wa.me/6285117202425"
              className="btn-primary w-full text-center mt-3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
