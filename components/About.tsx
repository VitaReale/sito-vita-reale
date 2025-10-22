import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="sticky top-0 bg-secondary rounded-t-3xl shadow-2xl -mt-6">
      <div className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://picsum.photos/600/400?random=2" alt="Chi Siamo" className="rounded-lg shadow-xl w-full" />
          </div>
          <div className="text-primary">
            <h2 className="text-4xl font-bold font-heading mb-6">Chi Siamo</h2>
            <p className="mb-4 text-lg">
              Vita Reale è un'associazione il cui scopo è raggiungere ogni persona sulla terra con la verità e l'amore di Gesù.
            </p>
            <p className="text-lg">
              Lo facciamo servendo le chiese locali, equipaggiando e incoraggiando i credenti, ovunque essi siano, a condividere il Vangelo con ogni persona. Chiunque può essere parte di questa missione. Partecipa anche tu alle nostre iniziative! Se vuoi saperne di più, scrivici sulle nostre pagine Facebook e Instagram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
