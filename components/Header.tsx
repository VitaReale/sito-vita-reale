import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Chi Siamo' },
  { href: '#mission', label: 'Cosa Facciamo' },
  { href: '#core-missions', label: 'Scopo' },
  { href: '#contact', label: 'Contatti' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center text-2xl font-bold font-heading tracking-wider transition-colors duration-300" 
          style={{ color: isScrolled ? '#2B282A' : '#F6EEDF' }}
        >
          <svg 
            className="h-12 w-auto mr-3"
            data-name="Livello 1" 
            xmlns="http://www.w3.org/2000/svg" 
            version="1.1" 
            viewBox="0 0 1080 1350"
            fill="currentColor"
          >
            <polygon points="531.25 404.43 357.21 676.86 132.25 525.43 227.8 877.98 834.45 877.98 926.25 525.43 705.05 676.86 531.25 404.43"/>
          </svg>
          VITA REALE
        </a>
        <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={`font-bold transition-colors duration-300 ${isScrolled ? 'text-secondary hover:text-accent' : 'text-primary hover:text-accent'}`}>
                {link.label}
                </a>
            ))}
            </nav>
            <div className="flex items-center space-x-4">
                 <a 
                    href="./collabora.html" 
                    className={`font-bold border-2 rounded-full px-5 py-2 text-sm transition-all duration-300 ${isScrolled ? 'border-accent text-accent hover:bg-accent hover:text-primary' : 'border-primary text-primary hover:bg-primary hover:text-secondary'}`}
                    >
                    Collabora con noi
                </a>
                <a 
                    href="#" 
                    className="bg-accent hover:bg-opacity-90 text-secondary font-bold py-2.5 px-6 rounded-full text-sm transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                    Dona Ora
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
