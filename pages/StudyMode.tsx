import React, { useState, useMemo } from 'react';
import { Smile, Zap, ArrowLeft, Play, Settings2, Tag, Check } from 'lucide-react';
import { Difficulty, Question } from '../types';
import { getQuestionsByDifficulty, questions as allQuestions } from '../data/questions';
import QuizRunner from '../components/QuizRunner';

// Função auxiliar para embaralhar
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const StudyMode: React.FC = () => {
  const [configMode, setConfigMode] = useState<{diff: Difficulty, totalAvailable: number} | null>(null);
  const [questionLimit, setQuestionLimit] = useState<number>(10);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  
  const [activeQuizQuestions, setActiveQuizQuestions] = useState<Question[]>([]);
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | null>(null);

  // Extrair categorias disponíveis para a dificuldade selecionada
  const availableCategories = useMemo(() => {
    if (!configMode) return [];
    const filtered = getQuestionsByDifficulty(configMode.diff);
    const cats = new Set(filtered.map(q => q.category || 'Geral'));
    return ['Todas', ...Array.from(cats)].sort();
  }, [configMode]);

  const handleDifficultySelect = (difficulty: Difficulty) => {
    const filtered = getQuestionsByDifficulty(difficulty);
    setConfigMode({
      diff: difficulty,
      totalAvailable: filtered.length
    });
    setQuestionLimit(Math.min(10, filtered.length));
    setSelectedCategory('Todas');
  };

  const handleStartQuiz = () => {
    if (!configMode) return;
    
    // 1. Filtrar por dificuldade
    let filtered = getQuestionsByDifficulty(configMode.diff);

    // 2. Filtrar por categoria (se não for Todas)
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(q => (q.category || 'Geral') === selectedCategory);
    }
    
    // 3. Embaralhar
    const shuffled = shuffleArray(filtered);
    
    // 4. Limitar quantidade
    const selected = shuffled.slice(0, questionLimit);
    
    setActiveQuizQuestions(selected);
    setActiveDifficulty(configMode.diff);
    setConfigMode(null);
  };

  const handleExitQuiz = () => {
    setActiveQuizQuestions([]);
    setActiveDifficulty(null);
    setConfigMode(null);
  };

  const handleBackToSelection = () => {
    setConfigMode(null);
  };

  // Se o quiz está ativo
  if (activeQuizQuestions.length > 0 && activeDifficulty) {
    let theme: 'green' | 'orange' | 'red' = 'green';
    if (activeDifficulty === Difficulty.HARD) theme = 'orange';

    return (
      <div>
        <button 
          onClick={handleExitQuiz} 
          className="mb-4 flex items-center text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" /> Voltar para seleção
        </button>
        <QuizRunner 
          questions={activeQuizQuestions} 
          title={`Nível ${activeDifficulty} - ${selectedCategory}`} 
          colorTheme={theme}
          onExit={handleExitQuiz}
        />
      </div>
    );
  }

  // TELA DE CONFIGURAÇÃO
  if (configMode) {
     const isEasy = configMode.diff === Difficulty.EASY;
     const themeClass = isEasy ? "text-green-600 bg-green-50" : "text-orange-600 bg-orange-50";
     const borderClass = isEasy ? "border-green-200" : "border-orange-200";
     const btnClass = isEasy ? "bg-green-600 hover:bg-green-700" : "bg-orange-600 hover:bg-orange-700";
     const activeCatClass = isEasy ? "bg-green-100 text-green-700 border-green-200" : "bg-orange-100 text-orange-700 border-orange-200";

     // Recalcula o total disponível baseado na categoria selecionada
     const currentTotalAvailable = selectedCategory === 'Todas' 
        ? configMode.totalAvailable 
        : getQuestionsByDifficulty(configMode.diff).filter(q => (q.category || 'Geral') === selectedCategory).length;

     // Ajusta o limite se for maior que o disponível na categoria
     if (questionLimit > currentTotalAvailable && currentTotalAvailable > 0) {
        setQuestionLimit(currentTotalAvailable);
     }

     return (
       <div className="max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
         <button 
          onClick={handleBackToSelection} 
          className="mb-6 flex items-center text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" /> Voltar
        </button>

         <div className={`bg-white dark:bg-dark-card p-6 md:p-8 rounded-3xl shadow-lg border-2 ${borderClass}`}>
            <div className="text-center mb-6">
               <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 ${themeClass}`}>
                  {isEasy ? <Smile size={32} /> : <Zap size={32} />}
               </div>
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Configurar Sessão {configMode.diff}</h2>
               <p className="text-gray-500 dark:text-gray-400">Personalize seu treino</p>
            </div>

            {/* Category Filter */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                 <Tag size={16} /> Filtrar por Tópico
              </label>
              <div className="flex flex-wrap gap-2">
                 {availableCategories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                         selectedCategory === cat
                         ? `${activeCatClass} shadow-sm`
                         : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {cat} {selectedCategory === cat && <Check size={12} className="inline ml-1" />}
                    </button>
                 ))}
              </div>
            </div>

            <div className="mb-8">
               <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 flex justify-between">
                  <span>Quantidade de Questões</span>
                  <span className={`text-lg font-bold ${isEasy ? 'text-green-600' : 'text-orange-600'}`}>
                    {questionLimit}
                  </span>
               </label>
               
               <input 
                 type="range" 
                 min="1" 
                 max={currentTotalAvailable} 
                 value={questionLimit}
                 onChange={(e) => setQuestionLimit(parseInt(e.target.value))}
                 className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-${isEasy ? 'green' : 'orange'}-600`}
               />
               
               <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                  <span>1</span>
                  <span>{currentTotalAvailable} (Disponíveis)</span>
               </div>
            </div>

            <div className="flex gap-2 mb-8 justify-center flex-wrap">
               {[5, 10, 20, 50].map(val => (
                 val <= currentTotalAvailable && (
                   <button
                     key={val}
                     onClick={() => setQuestionLimit(val)}
                     className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors ${
                       questionLimit === val 
                         ? activeCatClass
                         : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50'
                     }`}
                   >
                     {val}
                   </button>
                 )
               ))}
               <button
                  onClick={() => setQuestionLimit(currentTotalAvailable)}
                  className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors ${
                    questionLimit === currentTotalAvailable
                       ? activeCatClass
                       : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50'
                  }`}
               >
                 Todas ({currentTotalAvailable})
               </button>
            </div>

            <button
               onClick={handleStartQuiz}
               disabled={currentTotalAvailable === 0}
               className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 ${btnClass} ${currentTotalAvailable === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
               <Play size={24} fill="currentColor" />
               INICIAR AGORA
            </button>
         </div>
       </div>
     );
  }

  // Tela de Seleção Inicial
  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Modo Estudo</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          Selecione o nível de dificuldade e o tópico para começar. Receba feedback imediato.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Card FÁCIL */}
        <button 
          onClick={() => handleDifficultySelect(Difficulty.EASY)}
          className="group flex flex-col items-center p-8 bg-white dark:bg-dark-card border border-green-100 dark:border-green-900/30 rounded-3xl shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-green-50 dark:bg-green-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Smile size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Fácil</h3>
            <div className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-md mb-2">
              <Settings2 size={12} /> CONFIGURAR
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Ideal para começar. Conceitos fundamentais e definições básicas do HDI SCA.
            </p>
          </div>
        </button>

        {/* Card DIFÍCIL */}
        <button 
          onClick={() => handleDifficultySelect(Difficulty.HARD)}
          className="group flex flex-col items-center p-8 bg-white dark:bg-dark-card border border-orange-100 dark:border-orange-900/30 rounded-3xl shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-orange-50 dark:bg-orange-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Zap size={40} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">Difícil</h3>
            <div className="flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-md mb-2">
              <Settings2 size={12} /> CONFIGURAR
            </div>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Questões situacionais e aplicação de conceitos em cenários do dia a dia.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default StudyMode;
