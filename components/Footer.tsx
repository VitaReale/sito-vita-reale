import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-historical/30 py-8">
      <div className="container mx-auto px-6 text-center text-primary/60">
        <p>&copy; {new Date().getFullYear()} Vita Reale. Tutti i diritti riservati.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-accent transition-colors">Facebook</a>
          <a href="#" className="hover:text-accent transition-colors">Twitter</a>
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
