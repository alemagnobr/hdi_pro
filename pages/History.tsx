import React from 'react';
import { useProgress, SessionResult } from '../context/ProgressContext';
import { BarChart3, TrendingUp, TrendingDown, Clock, Flag, Calendar, Trash2 } from 'lucide-react';

const History: React.FC = () => {
  const { sessions, clearHistory } = useProgress();

  if (sessions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <BarChart3 size={40} />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Seu Histórico</h2>
        <p className="text-lg text-gray-500 max-w-md mx-auto mb-8">
          Você ainda não realizou nenhum simulado ou estudo. Comece agora para ver seu progresso aqui!
        </p>
      </div>
    );
  }

  const latestSession = sessions[0];
  const previousSessions = sessions.slice(1);

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-500 pb-20">
      
      {/* Relatório da Última Sessão (Destaque) */}
      <section className="space-y-6">
         <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
               <Flag className="text-primary-600" /> Relatório da Última Sessão
            </h2>
            <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {latestSession.date} • {latestSession.title}
            </span>
         </div>

         {/* Placar Principal */}
         <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-primary-500"></div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6">Resumo de Desempenho</h3>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
              <div className="bg-green-50 px-6 py-4 rounded-2xl border border-green-100 min-w-[140px]">
                <span className="block text-4xl font-bold text-green-600">{latestSession.correct}</span>
                <span className="text-sm text-green-800 font-medium">Acertos</span>
              </div>
              <div className="bg-red-50 px-6 py-4 rounded-2xl border border-red-100 min-w-[140px]">
                <span className="block text-4xl font-bold text-red-600">{latestSession.incorrect}</span>
                <span className="text-sm text-red-800 font-medium">Erros</span>
              </div>
              <div className="bg-blue-50 px-6 py-4 rounded-2xl border border-blue-100 min-w-[140px]">
                <span className="block text-4xl font-bold text-blue-900">{latestSession.accuracy}%</span>
                <span className="text-sm text-blue-700 font-medium">Precisão</span>
              </div>
            </div>
         </div>

         {/* Análise Detalhada */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pontos Fortes */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Temas que Dominou</h3>
               </div>
               
               {latestSession.bestCategories.length > 0 ? (
                 <div className="space-y-4">
                   {latestSession.bestCategories.map(cat => (
                     <div key={cat.name}>
                       <div className="flex justify-between text-sm mb-1">
                         <span className="font-medium text-gray-700">{cat.name}</span>
                         <span className="text-green-600 font-bold">{cat.percentage}%</span>
                       </div>
                       <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                         <div className="bg-green-500 h-full rounded-full" style={{ width: `${cat.percentage}%` }}></div>
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <p className="text-sm text-gray-400 italic">Continue estudando para identificar seus pontos fortes!</p>
               )}
            </div>

            {/* Pontos a Melhorar */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
               <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-100 text-red-700 rounded-lg">
                    <TrendingDown size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">Temas para Revisar</h3>
               </div>

               {latestSession.weakCategories.length > 0 ? (
                 <div className="space-y-4">
                   {latestSession.weakCategories.map(cat => (
                     <div key={cat.name}>
                       <div className="flex justify-between text-sm mb-1">
                         <span className="font-medium text-gray-700">{cat.name}</span>
                         <span className="text-red-600 font-bold">{cat.percentage}%</span>
                       </div>
                       <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                         <div className="bg-red-500 h-full rounded-full" style={{ width: `${cat.percentage}%` }}></div>
                       </div>
                       <div className="text-xs text-gray-400 mt-1">
                         {cat.correct} acertos de {cat.total} questões
                       </div>
                     </div>
                   ))}
                 </div>
               ) : (
                 <p className="text-sm text-gray-400 italic">Parabéns! Nenhum tema crítico identificado nesta sessão.</p>
               )}
            </div>
         </div>
      </section>

      {/* Histórico Anterior */}
      {previousSessions.length > 0 && (
        <section className="pt-8 border-t border-gray-200">
           <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
             <Clock size={20} className="text-gray-400" />
             Sessões Anteriores
           </h3>
           
           <div className="space-y-4">
             {previousSessions.map(session => (
               <div key={session.id} className="bg-white p-4 rounded-xl border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm ${session.accuracy >= 70 ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                      {session.accuracy}%
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{session.title}</h4>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar size={12} /> {session.date} • {session.totalAnswered} questões
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-green-600 block">{session.correct} Acertos</span>
                    <span className="text-xs text-red-400 block">{session.incorrect} Erros</span>
                  </div>
               </div>
             ))}
           </div>
        </section>
      )}
      
      {sessions.length > 0 && (
         <div className="flex justify-center mt-8">
            <button 
              onClick={clearHistory}
              className="flex items-center gap-2 text-sm text-red-500 hover:text-red-700 px-4 py-2 hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 size={16} /> Limpar Histórico
            </button>
         </div>
      )}

    </div>
  );
};

export default History;