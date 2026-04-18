import React from 'react';
import { Menu, X, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">
          Fernandes DEV
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 glass rounded-2xl p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
