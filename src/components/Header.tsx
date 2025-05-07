import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'teams', label: 'Teams' },
  { id: 'contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
          Muhammad<span className="text-teal-500">Abdullah</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-teal-500 transition-colors`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="flex items-center gap-1 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl"
        >
          {isMenuOpen ? (
            <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.id} className="px-4 py-2">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-800 hover:text-teal-500 transition-colors w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="px-4 py-2">
              <a
                href="/resume.pdf"
                download="Muhammad_Abdullah_Resume.pdf"
                className="flex items-center gap-1 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
              >
                <Download size={16} /> Resume
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;