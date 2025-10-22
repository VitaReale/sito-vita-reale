import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="sticky top-0 bg-secondary rounded-t-3xl shadow-2xl -mt-6">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-primary">Contattaci</h2>
          <p className="text-lg text-primary/80 mt-4 max-w-3xl mx-auto">
            Hai domande o vuoi collaborare? Siamo qui per te.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4" onSubmit={e => e.preventDefault()}>
            <div>
              <input type="text" placeholder="Il tuo Nome" className="w-full p-3 rounded-lg bg-primary/10 border-2 border-transparent focus:border-accent focus:outline-none text-primary placeholder-primary/50"/>
            </div>
            <div>
              <input type="email" placeholder="La tua Email" className="w-full p-3 rounded-lg bg-primary/10 border-2 border-transparent focus:border-accent focus:outline-none text-primary placeholder-primary/50"/>
            </div>
            <div>
              <textarea placeholder="Il tuo Messaggio" rows={5} className="w-full p-3 rounded-lg bg-primary/10 border-2 border-transparent focus:border-accent focus:outline-none text-primary placeholder-primary/50"></textarea>
            </div>
            <button type="submit" className="w-full bg-accent hover:bg-opacity-90 text-secondary font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
              Invia Messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
