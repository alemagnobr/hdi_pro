import React, { useState, useEffect } from 'react';
import { Flame, HeartCrack, Skull, Trophy, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { questions as allQuestions } from '../data/questions';
import { Question, AppRoute } from '../types';
import { useNavigate } from 'react-router-dom';

// Função auxiliar para embaralhar
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SurvivalMode: React.FC = () => {
  const navigate = useNavigate();
  const { addResult, survivalHighScore, updateSurvivalScore } = useProgress();
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const [questionsQueue, setQuestionsQueue] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Inicializa o jogo
  const startGame = () => {
    const shuffled = shuffleArray([...allQuestions]);
    setQuestionsQueue(shuffled);
    setCurrentIndex(0);
    setStreak(0);
    setGameOver(false);
    setIsPlaying(true);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const currentQ = questionsQueue[currentIndex];
    const isCorrect = idx === currentQ.correctOptionIndex;
    
    // Registra estatística global
    addResult(isCorrect, currentQ.id);

    if (isCorrect) {
       // Aguarda um pouco e vai para a próxima
       setTimeout(() => {
          setStreak(prev => prev + 1);
          if (currentIndex < questionsQueue.length - 1) {
             setCurrentIndex(prev => prev + 1);
             setSelectedOption(null);
             setIsAnswered(false);
          } else {
             // Ganhou o jogo (respondeu TODAS as questões do banco sem errar - improvável mas possível)
             endGame(streak + 1); 
          }
       }, 1000);
    } else {
       // Game Over
       setTimeout(() => {
          endGame(streak);
       }, 1500);
    }
  };

  const endGame = (finalScore: number) => {
    updateSurvivalScore(finalScore);
    setGameOver(true);
    setIsPlaying(false);
  };

  // --- TELA DE GAME OVER ---
  if (gameOver) {
    const isNewRecord = streak >= survivalHighScore && streak > 0;

    return (
       <div className="max-w-md mx-auto py-12 px-4 text-center animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <Skull size={48} />
          </div>
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">GAME OVER</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Você errou e sua jornada acabou.</p>

          <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-6 rounded-2xl mb-8 shadow-lg relative overflow-hidden">
             {isNewRecord && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-bl-xl">
                   NOVO RECORDE!
                </div>
             )}
             <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Sequência Atual</p>
             <p className="text-5xl font-black text-gray-800 dark:text-white mb-4">{streak}</p>
             
             <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-4"></div>
             
             <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Melhor Sequência</p>
             <p className="text-xl font-bold text-yellow-600 dark:text-yellow-500 flex items-center justify-center gap-2">
               <Trophy size={16} /> {Math.max(streak, survivalHighScore)}
             </p>
          </div>

          <button 
             onClick={startGame}
             className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl shadow-lg transition-transform active:scale-95 mb-4"
          >
             Tentar Novamente
          </button>
          <button 
             onClick={() => navigate(AppRoute.DASHBOARD)}
             className="w-full py-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
          >
             Sair
          </button>
       </div>
    );
  }

  // --- TELA DO JOGO ---
  if (isPlaying) {
     const currentQ = questionsQueue[currentIndex];
     
     return (
        <div className="max-w-2xl mx-auto h-[calc(100vh-140px)] flex flex-col">
           {/* Header */}
           <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-red-500 font-bold animate-pulse">
                 <HeartCrack fill="currentColor" /> 1 Vida
              </div>
              <div className="bg-gray-900 text-white px-4 py-1 rounded-full font-mono font-bold text-lg border-2 border-red-500">
                 {streak}
              </div>
           </div>

           {/* Question Card */}
           <div className="flex-1 overflow-y-auto mb-4">
              <div className="bg-white dark:bg-dark-card p-6 rounded-3xl shadow-lg border-2 border-red-100 dark:border-red-900/30">
                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-8">{currentQ.text}</h3>
                 
                 <div className="space-y-3">
                    {currentQ.options.map((option, idx) => {
                       let btnClass = "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800";
                       let icon = null;

                       if (isAnswered) {
                          if (idx === currentQ.correctOptionIndex) {
                             btnClass = "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400";
                             icon = <CheckCircle2 size={20} />;
                          } else if (idx === selectedOption) {
                             btnClass = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400";
                             icon = <XCircle size={20} />;
                          } else {
                             btnClass = "border-gray-100 opacity-50";
                          }
                       }

                       return (
                          <button
                             key={idx}
                             onClick={() => handleOptionSelect(idx)}
                             disabled={isAnswered}
                             className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between font-medium text-gray-700 dark:text-gray-300 ${btnClass}`}
                          >
                             <span>{option}</span>
                             {icon}
                          </button>
                       );
                    })}
                 </div>
              </div>
           </div>
           
           <div className="text-center text-xs text-gray-400 uppercase font-bold tracking-widest opacity-50">
              Modo Morte Súbita • Errou, Perdeu
           </div>
        </div>
     );
  }

  // --- TELA INICIAL ---
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center animate-in fade-in duration-500">
       <div className="mb-8 relative inline-block">
          <div className="w-24 h-24 bg-red-600 text-white rounded-3xl flex items-center justify-center shadow-lg transform -rotate-3">
             <Flame size={48} fill="currentColor" />
          </div>
       </div>

       <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">MODO SOBREVIVÊNCIA</h2>
       <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto mb-10">
          Responda o máximo de questões que conseguir sem errar nenhuma. 
          <span className="block mt-2 font-bold text-red-600 dark:text-red-400">Um erro = Game Over.</span>
       </p>

       <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-dark-border min-w-[200px]">
             <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Recorde Atual</p>
             <p className="text-4xl font-black text-yellow-500 flex items-center justify-center gap-2">
                <Trophy size={32} /> {survivalHighScore}
             </p>
          </div>
       </div>

       <button 
          onClick={startGame}
          className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xl rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-3 mx-auto"
       >
          DESAFIAR A MORTE <ArrowRight size={24} />
       </button>
    </div>
  );
};

export default SurvivalMode;
