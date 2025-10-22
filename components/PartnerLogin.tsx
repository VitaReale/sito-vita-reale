import React from 'react';

const PartnerLogin: React.FC = () => {
  return (
    <section id="partner" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-4xl font-bold font-heading mb-4 text-secondary">Area Partner</h2>
          <p className="text-lg text-secondary/80 mb-8">
            Accedi al portale dedicato per gestire i tuoi ordini e collaborazioni.
          </p>
        </div>
        <div className="max-w-md mx-auto bg-primary p-8 rounded-lg shadow-2xl">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-4">
              <label htmlFor="partner-email" className="block text-secondary/90 mb-2">Email</label>
              <input 
                type="email" 
                id="partner-email" 
                placeholder="iltuoindirizzo@email.com"
                className="w-full px-4 py-2 bg-white border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="partner-password" className="block text-secondary/90 mb-2">Password</label>
              <input 
                type="password" 
                id="partner-password" 
                placeholder="********"
                className="w-full px-4 py-2 bg-white border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-tertiary hover:bg-opacity-90 text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Accedi
            </button>
            <p className="text-xs text-secondary/50 mt-4 text-center">
              Questa sezione è riservata ai partner registrati. Funzionalità in fase di sviluppo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerLogin;
