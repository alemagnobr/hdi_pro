import React, { useState } from 'react';
import { useProgress } from '../context/ProgressContext';
import { questions as allQuestions } from '../data/questions';
import QuizRunner from '../components/QuizRunner';
import { BrainCircuit, CheckCircle2, Clock } from 'lucide-react';

const SmartReview: React.FC = () => {
  const { getDueQuestions } = useProgress();
  const [isReviewing, setIsReviewing] = useState(false);

  // Obtém as questões vencidas
  const dueQuestionIds = getDueQuestions();
  
  // Filtra o objeto completo das questões
  const questionsToReview = allQuestions.filter(q => dueQuestionIds.includes(q.id));

  if (isReviewing && questionsToReview.length > 0) {
    return (
      <QuizRunner 
        questions={questionsToReview}
        title="Revisão Espaçada"
        colorTheme="red"
        onExit={() => setIsReviewing(false)}
      />
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in duration-500 text-center">
      <div className="mb-8 relative inline-block">
         <div className="w-24 h-24 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-3xl flex items-center justify-center shadow-lg transform rotate-3">
            <BrainCircuit size={48} />
         </div>
         <div className="absolute -top-2 -right-2 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 border-white shadow-md">
            {questionsToReview.length}
         </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Revisão Espaçada</h2>
      
      {questionsToReview.length > 0 ? (
        <>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-8">
            Você tem <strong>{questionsToReview.length} questões</strong> agendadas para revisão hoje.
            O algoritmo de repetição espaçada otimiza sua memória revisando conteúdos prestes a serem esquecidos.
          </p>
          
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800/50 p-6 rounded-2xl mb-8 text-left max-w-lg mx-auto">
             <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                <Clock size={16} /> Como funciona:
             </h3>
             <ul className="list-disc pl-5 space-y-2 text-purple-700 dark:text-purple-300 text-sm">
                <li>Acertos movem a questão para uma data futura (1 dia, 3 dias, 7 dias...).</li>
                <li>Erros trazem a questão de volta para revisão imediata (hoje/amanhã).</li>
                <li>Mantenha essa fila zerada diariamente para máxima retenção!</li>
             </ul>
          </div>

          <button 
            onClick={() => setIsReviewing(true)}
            className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2 mx-auto"
          >
            Começar Revisão
          </button>
        </>
      ) : (
        <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-3xl border border-green-100 dark:border-green-800/50 max-w-lg mx-auto">
           <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
           <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Tudo em dia!</h3>
           <p className="text-green-700 dark:text-green-300">
             Não há revisões pendentes para hoje. Volte amanhã ou pratique no Modo Estudo para adicionar novas questões ao seu ciclo de memória.
           </p>
        </div>
      )}
    </div>
  );
};

export default SmartReview;
