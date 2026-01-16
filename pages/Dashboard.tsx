import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../types';
import { BookOpenCheck, Trophy, ArrowRight, Zap, Target, TrendingUp, Calendar, Clock } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { 
    totalAnswered, 
    totalCorrect,
    currentLevel, 
    nextLevelThreshold, 
    progressPercentage,
    sessions 
  } = useProgress();

  // Calcula a precisão média geral
  const averageAccuracy = React.useMemo(() => {
    if (sessions.length === 0) return 0;
    const sumAccuracy = sessions.reduce((acc, session) => acc + session.accuracy, 0);
    return Math.round(sumAccuracy / sessions.length);
  }, [sessions]);

  const lastSession = sessions.length > 0 ? sessions[0] : null;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      
      {/* 1. Hero Section: Level & XP */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-800 rounded-3xl p-6 md:p-8 text-white shadow-xl shadow-primary-900/10 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-primary-100 font-medium mb-1">Status Atual</p>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <Trophy className="text-yellow-400" fill="currentColor" />
                {currentLevel}
              </h2>
            </div>
            <div className="text-right md:text-right">
              <p className="text-2xl font-bold">{totalCorrect} <span className="text-primary-200 text-sm font-normal">/ {nextLevelThreshold} XP</span></p>
              <p className="text-xs text-primary-200 uppercase tracking-wider font-bold">Próximo Nível</p>
            </div>
          </div>

          <div className="w-full bg-black/20 h-4 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
             <div 
               className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(250,204,21,0.5)]" 
               style={{ width: `${progressPercentage}%` }}
             ></div>
          </div>
          <p className="text-xs text-right mt-2 text-primary-100 font-medium">{progressPercentage}% para evoluir</p>
        </div>
      </div>

      {/* 2. Global Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <BookOpenCheck size={18} />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase">Respondidas</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{totalAnswered}</span>
        </div>
        
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <Target size={18} />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase">Precisão</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{averageAccuracy}%</span>
        </div>

        <div className="col-span-2 md:col-span-1 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <Zap size={18} />
            </div>
            <span className="text-xs font-bold text-gray-400 uppercase">Sessões</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">{sessions.length}</span>
        </div>
      </div>

      {/* 3. Main Action & Last Session */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Main CTA */}
        <div 
            onClick={() => navigate(AppRoute.STUDY)}
            className="group cursor-pointer bg-white p-6 rounded-3xl shadow-sm border-2 border-primary-100 hover:border-primary-500 hover:shadow-lg transition-all relative overflow-hidden"
        >
             <div className="relative z-10">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                   <Zap size={24} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modo Estudo</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Pratique com questões fáceis e difíceis. Feedback imediato.
                </p>
                <div className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 group-hover:bg-primary-700 transition-colors">
                  Começar Agora <ArrowRight size={18} />
                </div>
             </div>
        </div>

        {/* Last Session Review (Conditional) */}
        {lastSession ? (
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
             <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <TrendingUp size={20} className="text-gray-400" />
                  Última Atividade
                </h3>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-md font-medium">
                  {lastSession.date}
                </span>
             </div>

             <div className="flex-1 flex flex-col justify-center">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-gray-500 text-sm">{lastSession.title}</span>
                 <span className={`text-lg font-bold ${lastSession.accuracy >= 70 ? 'text-green-600' : 'text-orange-500'}`}>
                   {lastSession.accuracy}% acertos
                 </span>
               </div>
               
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-4">
                 <div 
                    className={`h-full rounded-full ${lastSession.accuracy >= 70 ? 'bg-green-500' : 'bg-orange-500'}`} 
                    style={{ width: `${lastSession.accuracy}%` }}
                 ></div>
               </div>
               
               <div className="flex gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    {lastSession.correct} Certas
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    {lastSession.incorrect} Erradas
                  </div>
               </div>
             </div>

             <button 
               onClick={() => navigate(AppRoute.HISTORY)}
               className="mt-6 w-full py-3 border border-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-50 transition-colors"
             >
               Ver Detalhes
             </button>
          </div>
        ) : (
          /* Placeholder if no session exists */
          <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 border-dashed flex flex-col items-center justify-center text-center opacity-70">
             <Clock size={40} className="text-gray-300 mb-3" />
             <h3 className="font-bold text-gray-400">Sem histórico recente</h3>
             <p className="text-sm text-gray-400 mt-1">
               Complete seu primeiro estudo para ver estatísticas aqui.
             </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashboard;