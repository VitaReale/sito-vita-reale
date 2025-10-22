import React, { useState } from 'react';

const AccordionItem: React.FC<{ title: string; children: React.ReactNode; isOpen: boolean; onClick: () => void; }> = ({ title, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-primary/20">
      <button
        onClick={onClick}
        className="w-full text-left py-5 px-6 flex justify-between items-center text-primary hover:bg-primary/5 transition-colors"
      >
        <span className="text-xl font-heading">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-6 text-primary/90">
          {children}
        </div>
      </div>
    </div>
  );
};


const CoreMissions: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const missions = [
        {
            title: 'Ogni preghiera',
            content: (
                <p className="text-lg italic">"La preghiera è l'equalizzatore divino. Alcuni predicano, altri insegnano, altri cantano pubblicamente, ma tutti possono pregare".<br/>- Dick Eastman</p>
            )
        },
        {
            title: 'Ogni persona',
            content: (
                 <div className="flex items-center gap-8">
                    <div className="flex-1">
                        <p className="mb-4">Vita Reale è un ministero di 75 anni con più di 155 sedi in tutto il mondo, con lo scopo di raggiungere ogni uomo in ogni luogo con l'amore di Dio.</p>
                        <p className="text-3xl font-bold text-accent">1,47 MILIARDI di persone raggiunte</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
            )
        },
        {
            title: 'Ogni casa',
            content: (
                 <p className="text-lg">Abbiamo visto oltre 110 milioni di persone rispondere positivamente al Vangelo e solo l'anno scorso abbiamo raggiunto 82 milioni di case!</p>
            )
        }
    ];

  return (
    <section id="core-missions" className="sticky top-0 bg-secondary rounded-t-3xl shadow-2xl -mt-6">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-primary">Vita Reale ha tre missioni fondamentali</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-primary/5 rounded-lg">
           {missions.map((mission, index) => (
            <AccordionItem
              key={index}
              title={mission.title}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            >
              {mission.content}
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreMissions;
