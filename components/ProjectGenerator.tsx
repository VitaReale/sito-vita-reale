import React, { useState, useCallback } from 'react';
import { generateProjectIdeas } from '../services/geminiService';
import type { ProjectIdea } from '../types';
import Loader from './Loader';

const ProjectGenerator: React.FC = () => {
  const [theme, setTheme] = useState<string>('');
  const [ideas, setIdeas] = useState<ProjectIdea[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!theme.trim()) {
      setError('Per favore, inserisci un tema.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setIdeas([]);

    try {
      const result = await generateProjectIdeas(theme);
      setIdeas(result);
    } catch (err) {
      setError('Si è verificato un errore durante la generazione delle idee. Riprova più tardi.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [theme]);
  
  const IdeaCard: React.FC<{ idea: ProjectIdea }> = ({ idea }) => (
    <div className="bg-white p-6 rounded-lg border border-secondary/10 shadow-md transform transition-transform duration-300 hover:-translate-y-2">
      <h4 className="text-2xl font-bold font-heading text-accent mb-2">{idea.title}</h4>
      <p className="text-secondary/80 mb-4">{idea.description}</p>
      <div>
        <h5 className="font-semibold text-secondary mb-2">Passaggi Suggeriti:</h5>
        <ul className="list-disc list-inside space-y-1 text-secondary/70">
          {idea.steps.map((step, i) => <li key={i}>{step}</li>)}
        </ul>
      </div>
    </div>
  );

  return (
    <section id="app" className="py-24 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-heading mb-4 text-secondary">Generatore di Idee per Progetti</h2>
        <p className="text-lg text-secondary/80 mb-8 max-w-3xl mx-auto">
          Hai bisogno di ispirazione per il prossimo progetto della nostra associazione? Inserisci un tema e lascia che l'IA ti aiuti a trovare idee innovative.
        </p>

        <form onSubmit={handleGenerate} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4 mb-12">
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="Es: Sostenibilità, inclusione sociale..."
            className="w-full px-4 py-3 bg-white text-secondary border-2 border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading} className="bg-accent hover:bg-opacity-90 text-secondary font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
            {isLoading ? <Loader /> : 'Genera Idee'}
          </button>
        </form>

        {error && <p className="text-error bg-error/10 p-3 rounded-lg max-w-xl mx-auto">{error}</p>}

        {ideas.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-8">
            {ideas.map((idea, index) => (
              <IdeaCard key={index} idea={idea} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGenerator;
