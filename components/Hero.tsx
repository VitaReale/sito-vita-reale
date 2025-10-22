import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-primary">
      <div className="absolute inset-0 z-0">
        <img src="https://picsum.photos/1920/1080?random=1" alt="Background" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-secondary bg-opacity-60"></div>
      </div>
      <div className="relative z-10 p-6">
        <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.7)'}}>
          Gesù la vera speranza ieri, oggi e sempre.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.7)'}}>
          Abbiamo a cuore questo paese e crediamo che ogni vita sia preziosa davanti a Dio, nessuna esclusa.
        </p>
        <a href="#contact" className="bg-accent hover:bg-opacity-90 text-secondary font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 inline-block">
          Contattaci
        </a>
      </div>
    </section>
  );
};

export default Hero;
