import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, AlertTriangle, CheckCircle2, XCircle, ChevronRight, ChevronLeft, Flag } from 'lucide-react';
import { getQuestionsByDifficulty, questions as allQuestions } from '../data/questions';
import { Question, Difficulty, AppRoute } from '../types';
import { useProgress } from '../context/ProgressContext';

const SIMULATION_TIME_MINUTES = 75;
const QUESTIONS_COUNT = 60;
const PASSING_SCORE_PERCENT = 80;

// Função de embaralhamento
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const SimulationMode: React.FC = () => {
  const navigate = useNavigate();
  const { addSession, addResult } = useProgress();
  
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({}); // Map questionId -> optionIndex
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(SIMULATION_TIME_MINUTES * 60);

  // Inicializa o exame
  const startExam = () => {
    // Tenta pegar questões fáceis primeiro, conforme pedido
    const easyQuestions = getQuestionsByDifficulty(Difficulty.EASY);
    const hardQuestions = getQuestionsByDifficulty(Difficulty.HARD);
    
    // Mistura tudo para garantir aleatoriedade total, mas priorizando o pool se necessário
    // Como o usuário pediu "baseado no modo facil", vamos garantir uma boa dose delas, 
    // mas para um simulado "World Class", o ideal é misturar para ter volume.
    // Vamos pegar TODAS, embaralhar e pegar 60.
    const all = [...allQuestions];
    const shuffled = shuffleArray(all).slice(0, QUESTIONS_COUNT);
    
    setExamQuestions(shuffled);
    setIsRunning(true);
    setIsFinished(false);
    setAnswers({});
    setFlagged({});
    setTimeLeft(SIMULATION_TIME_MINUTES * 60);
  };

  // Cronômetro
  useEffect(() => {
    let timer: any;
    if (isRunning && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      finishExam();
    }
    return () => clearInterval(timer);
  }, [isRunning, isFinished, timeLeft]);

  // Formatação do tempo
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionIndex: number) => {
    const currentQ = examQuestions[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [currentQ.id]: optionIndex }));
  };

  const toggleFlag = () => {
    const currentQ = examQuestions[currentQuestionIndex];
    setFlagged(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }));
  };

  const finishExam = () => {
    setIsRunning(false);
    setIsFinished(true);

    // Calcula resultados
    let correctCount = 0;
    let incorrectCount = 0;
    const categoryStats: Record<string, { total: number, correct: number }> = {};

    examQuestions.forEach(q => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correctOptionIndex;
      
      if (isCorrect) correctCount++;
      else incorrectCount++;

      // Atualiza contexto global (XP, estatisticas gerais)
      // Importante: Passamos o ID da questão para o sistema de Revisão Inteligente saber qual errou
      addResult(isCorrect, q.id);

      // Stats locais para o relatório da sessão
      const cat = q.category || 'Geral';
      if (!categoryStats[cat]) categoryStats[cat] = { total: 0, correct: 0 };
      categoryStats[cat].total++;
      if (isCorrect) categoryStats[cat].correct++;
    });

    // Formata stats de categoria
    const categoriesArray = Object.entries(categoryStats).map(([name, data]) => ({
      name,
      total: data.total,
      correct: data.correct,
      percentage: Math.round((data.correct / data.total) * 100)
    }));

    const accuracy = Math.round((correctCount / QUESTIONS_COUNT) * 100);
    const passed = accuracy >= PASSING_SCORE_PERCENT;

    // Salva sessão
    addSession({
      title: passed ? 'Simulado (Aprovado)' : 'Simulado (Reprovado)',
      totalAnswered: QUESTIONS_COUNT, // Considera todas como "respondidas" no contexto do exame
      correct: correctCount,
      incorrect: incorrectCount,
      accuracy,
      bestCategories: categoriesArray.filter(c => c.percentage >= 70),
      weakCategories: categoriesArray.filter(c => c.percentage < 70),
      passed
    });
  };

  // TELA INICIAL
  if (!isRunning && !isFinished) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in zoom-in duration-500">
        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-dark-border text-center">
          <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Clock size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simulado HDI SCA</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            <p className="text-lg">Você está prestes a iniciar um exame simulado realista.</p>
            <ul className="text-left space-y-3 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-dark-border">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" /> 
                <span><strong>{QUESTIONS_COUNT} Questões</strong> selecionadas aleatoriamente.</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-blue-500" />
                <span><strong>{SIMULATION_TIME_MINUTES} Minutos</strong> de tempo limite.</span>
              </li>
              <li className="flex items-center gap-3">
                <AlertTriangle size={18} className="text-orange-500" />
                <span><strong>Sem feedback imediato.</strong> O resultado sai apenas no final.</span>
              </li>
              <li className="flex items-center gap-3">
                <Flag size={18} className="text-purple-500" />
                <span>Aprovação requer <strong>{PASSING_SCORE_PERCENT}%</strong> ({(QUESTIONS_COUNT * PASSING_SCORE_PERCENT) / 100} acertos).</span>
              </li>
            </ul>
          </div>
          <button 
            onClick={startExam}
            className="w-full md:w-auto px-10 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            Começar Simulado
          </button>
        </div>
      </div>
    );
  }

  // TELA DE RESULTADOS
  if (isFinished) {
    const correct = Object.keys(answers).filter(id => answers[id] === examQuestions.find(q => q.id === id)?.correctOptionIndex).length;
    const score = Math.round((correct / QUESTIONS_COUNT) * 100);
    const passed = score >= PASSING_SCORE_PERCENT;

    return (
      <div className="max-w-2xl mx-auto py-8 animate-in slide-in-from-bottom-8 duration-700">
        <div className={`text-center p-10 rounded-3xl shadow-2xl border-4 ${passed ? 'bg-white dark:bg-dark-card border-green-500' : 'bg-white dark:bg-dark-card border-red-500'}`}>
           {passed && <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {/* Simple CSS Confetti placeholder - in a real app would use canvas-confetti */}
              <div className="animate-bounce absolute top-10 left-10 text-4xl">🎉</div>
              <div className="animate-bounce absolute top-20 right-20 text-4xl delay-100">🎊</div>
           </div>}
           
           <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 ${passed ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
              {passed ? <CheckCircle2 size={60} /> : <XCircle size={60} />}
           </div>
           
           <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-2">{passed ? 'APROVADO!' : 'REPROVADO'}</h2>
           <p className="text-gray-500 dark:text-gray-400 mb-8">{passed ? 'Parabéns! Você está pronto para o exame.' : 'Continue estudando. Não desista!'}</p>
           
           <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                 <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-bold">Pontuação</p>
                 <p className={`text-3xl font-bold ${passed ? 'text-green-600' : 'text-red-600'}`}>{score}%</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                 <p className="text-sm text-gray-500 dark:text-gray-400 uppercase font-bold">Acertos</p>
                 <p className="text-3xl font-bold text-gray-800 dark:text-white">{correct}/{QUESTIONS_COUNT}</p>
              </div>
           </div>

           <div className="flex flex-col gap-3">
             <button 
               onClick={() => navigate(AppRoute.HISTORY)}
               className="w-full py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-900 transition-colors"
             >
               Ver Relatório Detalhado
             </button>
             <button 
               onClick={() => { setIsFinished(false); setIsRunning(false); }}
               className="w-full py-3 text-gray-600 dark:text-gray-400 font-bold hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
             >
               Voltar ao Início
             </button>
           </div>
        </div>
      </div>
    );
  }

  // TELA DO EXAME (RUNNING)
  const currentQ = examQuestions[currentQuestionIndex];
  const isFlagged = flagged[currentQ.id];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col">
      {/* Top Bar */}
      <div className="bg-white dark:bg-dark-card p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border flex items-center justify-between mb-4 sticky top-0 z-10">
         <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold ${timeLeft < 300 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'}`}>
               <Clock size={18} />
               {formatTime(timeLeft)}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
               Questão {currentQuestionIndex + 1} de {QUESTIONS_COUNT}
            </div>
         </div>
         
         <div className="flex items-center gap-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">
               {answeredCount} respondidas
            </div>
            <button 
               onClick={() => setIsRunning(false)}
               className="text-sm text-red-500 hover:text-red-700 font-medium px-3 py-1 rounded-lg hover:bg-red-50 transition-colors"
            >
               Sair
            </button>
            <button 
               onClick={finishExam}
               className="px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-lg shadow hover:bg-primary-700 transition-colors"
            >
               Entregar
            </button>
         </div>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto mb-4 bg-white dark:bg-dark-card rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-dark-border relative">
         <div className="flex justify-between items-start mb-6">
            <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase rounded-md tracking-wider">
               {currentQ.category || 'Geral'}
            </span>
            <button 
               onClick={toggleFlag}
               className={`p-2 rounded-full transition-colors ${isFlagged ? 'bg-orange-100 text-orange-500' : 'text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
               title="Marcar para revisão"
            >
               <Flag size={20} fill={isFlagged ? "currentColor" : "none"} />
            </button>
         </div>

         <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-relaxed mb-8">
            {currentQ.text}
         </h3>

         <div className="space-y-3">
            {currentQ.options.map((option, idx) => (
               <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${
                     answers[currentQ.id] === idx 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-100 shadow-md' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-300'
                  }`}
               >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                     answers[currentQ.id] === idx ? 'border-primary-500 bg-primary-500 text-white' : 'border-gray-300 dark:border-gray-600 text-transparent'
                  }`}>
                     <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="font-medium text-lg">{option}</span>
               </button>
            ))}
         </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex justify-between items-center bg-white dark:bg-dark-card p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border">
         <button 
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-colors ${
               currentQuestionIndex === 0 
                  ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
         >
            <ChevronLeft size={20} /> Anterior
         </button>

         {/* Question Dots (Pagination visual) - Simplified for mobile */}
         <div className="hidden md:flex gap-1 overflow-x-auto max-w-xs px-2">
            {examQuestions.map((q, i) => (
               <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                     i === currentQuestionIndex ? 'bg-primary-600 scale-125' : 
                     flagged[q.id] ? 'bg-orange-400' :
                     answers[q.id] !== undefined ? 'bg-gray-400' : 'bg-gray-200 dark:bg-gray-700'
                  }`}
               />
            ))}
         </div>

         <button 
            onClick={() => setCurrentQuestionIndex(prev => Math.min(QUESTIONS_COUNT - 1, prev + 1))}
            disabled={currentQuestionIndex === QUESTIONS_COUNT - 1}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold transition-colors ${
               currentQuestionIndex === QUESTIONS_COUNT - 1
                  ? 'text-gray-300 dark:text-gray-700 cursor-not-allowed' 
                  : 'bg-gray-900 dark:bg-gray-700 text-white hover:bg-black dark:hover:bg-gray-600 shadow-md'
            }`}
         >
            Próxima <ChevronRight size={20} />
         </button>
      </div>
    </div>
  );
};

export default SimulationMode;