import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Question, AppRoute } from '../types';
import { CheckCircle2, XCircle, ArrowRight, AlertCircle, Tag, BookOpen, Flag, StopCircle, Lightbulb } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface QuizRunnerProps {
  questions: Question[];
  title: string;
  colorTheme: 'green' | 'orange' | 'red';
  onExit: () => void;
}

// Interface para rastrear o histórico de respostas
interface AnswerHistory {
  questionId: string;
  category: string;
  isCorrect: boolean;
}

// Função auxiliar para embaralhar array (Fisher-Yates Shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const QuizRunner: React.FC<QuizRunnerProps> = ({ questions, title, colorTheme, onExit }) => {
  const navigate = useNavigate();
  const { addResult, addSession } = useProgress();

  // Inicializa o estado com as questões embaralhadas apenas na montagem
  // TAMBÉM embaralha as opções de cada questão para que a resposta correta não fique sempre na mesma letra/posição
  const [activeQuestions] = useState<Question[]>(() => {
    // 1. Embaralha a ordem das questões
    const shuffledQuestions = shuffleArray(questions);
    
    // 2. Embaralha as opções dentro de cada questão
    return shuffledQuestions.map((q: Question) => {
      // Clona as opções originais
      const originalOptions = [...q.options];
      // Identifica o TEXTO da resposta correta antes de embaralhar
      const correctOptionText = originalOptions[q.correctOptionIndex];
      
      // Embaralha as opções
      const shuffledOptions = shuffleArray(originalOptions);
      
      // Encontra o novo índice da resposta correta
      const newCorrectIndex = shuffledOptions.indexOf(correctOptionText);
      
      // Retorna a questão com as opções embaralhadas e o índice atualizado
      return {
        ...q,
        options: shuffledOptions,
        correctOptionIndex: newCorrectIndex
      };
    });
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const [isAnswered, setIsAnswered] = useState(false); 
  const [isStudying, setIsStudying] = useState(false); 

  const [userAnswers, setUserAnswers] = useState<AnswerHistory[]>([]);

  const colors = {
    green: { 
      bg: 'bg-green-50', 
      text: 'text-green-700', 
      border: 'border-green-200', 
      btn: 'bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg', 
      lightBtn: 'bg-white border-2 border-green-200 text-green-700 hover:border-green-500 hover:bg-green-50 shadow-sm hover:shadow-md' 
    },
    orange: { 
      bg: 'bg-orange-50', 
      text: 'text-orange-700', 
      border: 'border-orange-200', 
      btn: 'bg-orange-600 hover:bg-orange-700 shadow-md hover:shadow-lg', 
      lightBtn: 'bg-white border-2 border-orange-200 text-orange-700 hover:border-orange-500 hover:bg-orange-50 shadow-sm hover:shadow-md' 
    },
    red: { 
      bg: 'bg-red-50', 
      text: 'text-red-700', 
      border: 'border-red-200', 
      btn: 'bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg', 
      lightBtn: 'bg-white border-2 border-red-200 text-red-700 hover:border-red-500 hover:bg-red-50 shadow-sm hover:shadow-md' 
    }
  };
  
  const theme = colors[colorTheme];

  const correctCount = userAnswers.filter(a => a.isCorrect).length;
  const incorrectCount = userAnswers.filter(a => !a.isCorrect).length;

  // Lógica de cálculo de estatísticas (Memoizado para acesso, mas recalculos manuais no finish)
  const stats = useMemo(() => {
    const categoryStats: Record<string, { total: number, correct: number }> = {};

    userAnswers.forEach(ans => {
      if (!categoryStats[ans.category]) {
        categoryStats[ans.category] = { total: 0, correct: 0 };
      }
      categoryStats[ans.category].total++;
      if (ans.isCorrect) {
        categoryStats[ans.category].correct++;
      }
    });

    const categoryArray = Object.entries(categoryStats).map(([name, data]) => ({
      name,
      total: data.total,
      correct: data.correct,
      percentage: Math.round((data.correct / data.total) * 100)
    }));

    const sortedByPerformance = [...categoryArray].sort((a, b) => b.percentage - a.percentage);

    return {
      totalAnswered: userAnswers.length,
      correct: correctCount,
      incorrect: incorrectCount,
      accuracy: userAnswers.length > 0 ? Math.round((correctCount / userAnswers.length) * 100) : 0,
      bestCategories: sortedByPerformance.filter(c => c.percentage >= 70), 
      weakCategories: sortedByPerformance.filter(c => c.percentage < 70).reverse() 
    };
  }, [userAnswers, correctCount, incorrectCount]);

  if (activeQuestions.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="text-gray-400" size={32} />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sem questões disponíveis</h3>
        <p className="text-gray-500 mb-6">Ainda não há questões cadastradas para esta dificuldade.</p>
        <button onClick={onExit} className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
          Voltar
        </button>
      </div>
    );
  }

  const currentQuestion = activeQuestions[currentIndex];
  const progress = ((currentIndex) / activeQuestions.length) * 100;

  const finishQuiz = () => {
    // Salva a sessão atual no histórico global
    addSession({
      title,
      totalAnswered: stats.totalAnswered,
      correct: stats.correct,
      incorrect: stats.incorrect,
      accuracy: stats.accuracy,
      bestCategories: stats.bestCategories,
      weakCategories: stats.weakCategories
    });
    
    // Navega para a página de histórico que mostrará o relatório
    navigate(AppRoute.HISTORY);
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleStudy = () => {
    setIsStudying(true);
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === currentQuestion.correctOptionIndex;
    setIsAnswered(true);

    setUserAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      category: currentQuestion.category || 'Geral',
      isCorrect
    }]);

    addResult(isCorrect, currentQuestion.id);
  };

  const nextQuestion = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setIsStudying(false);
    } else {
      finishQuiz();
    }
  };

  const showExplanationText = isStudying || isAnswered;
  const revealCorrectAnswer = isAnswered;

  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header with Scoreboard */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full md:w-auto justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-100">
                <CheckCircle2 size={18} />
                <span className="font-bold text-lg">{correctCount}</span>
                <span className="text-xs uppercase font-bold tracking-wide opacity-70">Acertos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg border border-red-100">
                <XCircle size={18} />
                <span className="font-bold text-lg">{incorrectCount}</span>
                <span className="text-xs uppercase font-bold tracking-wide opacity-70">Erros</span>
            </div>
        </div>

        <button 
          onClick={finishQuiz}
          className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all w-full md:w-auto justify-center border-2 border-red-600"
        >
          <StopCircle size={20} fill="currentColor" className="text-red-600 bg-white rounded-full" />
          <span className="text-white">ENCERRAR E VER RELATÓRIO</span>
        </button>
      </div>

      {/* Info Bar */}
      <div className="flex items-center justify-between mb-6 px-2">
           <div className="flex items-center gap-3">
              <span className={`text-xs font-bold uppercase tracking-wider ${theme.text} bg-opacity-10 py-1 px-2 rounded bg-gray-100`}>
                {title}
              </span>
              {currentQuestion.category && (
                <span className="flex items-center gap-1 text-xs font-medium text-gray-500 bg-white border border-gray-200 px-2 py-1 rounded-md">
                  <Tag size={12} />
                  {currentQuestion.category}
                </span>
              )}
           </div>
           <span className="text-xs font-medium text-gray-400">
             {currentIndex + 1} de {activeQuestions.length}
           </span>
      </div>
      
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-1.5 rounded-full mb-8 overflow-hidden">
        <div 
          className={`h-full ${theme.btn} transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 mb-6">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed mb-8">
          {currentQuestion.text}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            let optionStyle = "border-gray-200 hover:border-gray-300 hover:bg-gray-50";
            let icon = null;

            if (revealCorrectAnswer) {
              if (index === currentQuestion.correctOptionIndex) {
                optionStyle = "border-green-500 bg-green-50 text-green-700";
                icon = <CheckCircle2 size={20} className="text-green-600" />;
              } else if (index === selectedOption) {
                optionStyle = "border-red-500 bg-red-50 text-red-700";
                icon = <XCircle size={20} className="text-red-600" />;
              } else {
                optionStyle = "border-gray-100 opacity-50";
              }
            } else if (selectedOption === index) {
              optionStyle = `border-primary-500 ring-1 ring-primary-500 bg-primary-50`;
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ${optionStyle}`}
              >
                <div className="flex items-center gap-4">
                    {/* Letra da opção (A, B, C, D) para facilitar referência */}
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${
                        selectedOption === index || (revealCorrectAnswer && index === currentQuestion.correctOptionIndex) 
                        ? 'border-transparent bg-white/20' 
                        : 'border-gray-200 bg-gray-50 text-gray-500'
                    }`}>
                        {String.fromCharCode(65 + index)}
                    </span>
                    <span className="font-medium text-base">{option}</span>
                </div>
                {icon}
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanationText && currentQuestion.explanation && (
        <div className="animate-in fade-in slide-in-from-top-2 duration-300 mb-6">
           <div className={`p-6 rounded-2xl ${theme.bg} border ${theme.border}`}>
              <div className="flex items-start gap-3">
                <div className={`mt-1 p-1 bg-white rounded-full ${theme.text}`}>
                  <BookOpen size={16} />
                </div>
                <div>
                  <h4 className={`font-bold ${theme.text} mb-1`}>Explicação</h4>
                  <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
           </div>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6 pb-20 md:pb-0">
         {isAnswered ? (
            <button
               onClick={nextQuestion}
               className={`flex items-center justify-center gap-2 px-8 py-3 ${theme.btn} text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95`}
             >
               {currentIndex === activeQuestions.length - 1 ? 'Ver Resultado' : 'Próxima Questão'}
               <ArrowRight size={20} />
             </button>
         ) : (
           <>
              {!isStudying && (
                <button
                  onClick={handleStudy}
                  className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${theme.lightBtn}`}
                >
                  <Lightbulb size={20} />
                  Estudar Explicação
                </button>
              )}
              
              <button
                onClick={checkAnswer}
                disabled={selectedOption === null}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  selectedOption === null 
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                    : `${theme.btn} text-white shadow-lg active:scale-95`
                }`}
              >
                Verificar Resposta
              </button>
           </>
         )}
      </div>
    </div>
  );
};

export default QuizRunner;