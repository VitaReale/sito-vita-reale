import React from 'react';
import type { Event } from '../types';

const mockEvents: Event[] = [
  {
    title: "Giornata di Pulizia del Parco",
    date: "25 Ottobre 2024",
    location: "Parco Centrale",
    description: "Unisciti a noi per una giornata dedicata alla pulizia e alla riqualificazione del nostro parco cittadino. Forniremo guanti e sacchi."
  },
  {
    title: "Workshop di Coding Creativo",
    date: "12 Novembre 2024",
    location: "Sede dell'Associazione",
    description: "Un laboratorio gratuito per imparare le basi della programmazione in modo divertente e creativo. Aperto a tutte le età."
  },
  {
    title: "Cena Sociale di Beneficenza",
    date: "15 Dicembre 2024",
    location: "Ristorante La Piazza",
    description: "Una serata speciale per raccogliere fondi a sostegno dei nostri progetti comunitari. Prenotazione obbligatoria."
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-heading text-center mb-16 text-primary">
          Eventi e Notizie
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {mockEvents.map((event, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-accent/20 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h3 className="text-2xl font-bold text-accent">{event.title}</h3>
                <p className="text-primary/70 font-mono text-sm sm:text-base">{event.date}</p>
              </div>
              <p className="text-primary/60 mb-3">{event.location}</p>
              <p className="text-primary/90">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
