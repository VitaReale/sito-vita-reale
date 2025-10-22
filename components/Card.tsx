import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-tertiary/20">
      <div className="flex justify-center items-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-bold font-heading mb-3 text-secondary">{title}</h3>
      <p className="text-secondary/80">{children}</p>
    </div>
  );
};

export default Card;
