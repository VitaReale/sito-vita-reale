import React from 'react';
import Card from './Card';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="sticky top-0 bg-primary rounded-t-3xl shadow-2xl -mt-6">
      <div className="container mx-auto px-6 text-center py-24">
        <h2 className="text-4xl font-bold font-heading mb-16 text-secondary">Vita Reale si occupa di:</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Preghiera"
          >
            Tutto inizia dalla Preghiera. Vita Reale è nata da una preghiera: Raggiungere ogni persona sulla terra con la verità e l'amore di Gesù.
          </Card>
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.525l.822-1.05-1.033-.763-1.44 1.815.421 1.782 1.405-.331 1.148-1.448-.323-1.005zM16.263 16.525l-.822-1.05 1.033-.763 1.44 1.815-.421 1.782-1.405-.331-1.148-1.448.323-1.005zM12 18a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            }
            title="Evangelizzazione"
          >
            Lo scopo di Vita Reale è raggiungere ogni casa. Solo l'anno scorso abbiamo raggiunto 82 milioni di case!
          </Card>
          <Card
            icon={
               <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            }
            title="Discepolato"
          >
            Vita Reale ha reso proprie le parole di Gesù: «Andate dunque e fate miei discepoli tutti i popoli...»
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Mission;
