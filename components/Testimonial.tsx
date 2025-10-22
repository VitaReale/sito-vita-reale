import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className="sticky top-0 bg-tertiary rounded-t-3xl shadow-2xl -mt-6">
      <div className="container mx-auto px-6 py-24">
         <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-heading text-primary">Dicono di noi</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-white/10 p-8 md:p-12 rounded-lg backdrop-blur-sm">
           <div className="md:flex items-center gap-8">
             <div className="flex-shrink-0 mb-6 md:mb-0 text-center">
                <img 
                  src="https://picsum.photos/seed/billygraham/128/128" 
                  alt="Dr. Billy Graham" 
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <p className="font-bold text-primary text-lg">Dr. Billy Graham</p>
                <p className="text-sm text-primary/70">Evangelista</p>
             </div>
             <div className="relative text-center md:text-left">
                <svg className="absolute -top-4 -left-6 h-10 w-10 text-primary/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.333 4C4.186 4 0 8.186 0 13.333c0 4.28 2.827 7.947 6.667 9.04v-6.507H4.533C4.813 11.2 6.827 8 9.333 8V4zm13.334 0C17.52 4 13.333 8.186 13.333 13.333c0 4.28 2.827 7.947 6.667 9.04v-6.507H17.867c.28-4.627 2.294-7.827 4.8-7.827V4z" />
                </svg>
                <blockquote className="text-xl italic text-primary/90 leading-relaxed z-10 relative pl-4 md:pl-0">
                  "Vita Reale è uno dei movimenti più efficaci per Cristo che io conosca. Il loro impegno per l'evangelizzazione e il discepolato è un modello per tutti noi. Sono grato a Dio per la loro visione e il loro impatto globale."
                </blockquote>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
