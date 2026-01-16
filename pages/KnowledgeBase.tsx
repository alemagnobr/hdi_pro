import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronDown, ChevronUp, Tag } from 'lucide-react';
import { questions } from '../data/questions';

const KnowledgeBase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredQuestions = useMemo(() => {
    if (!searchTerm) return questions;
    const lower = searchTerm.toLowerCase();
    return questions.filter(q => 
      q.text.toLowerCase().includes(lower) || 
      q.explanation?.toLowerCase().includes(lower) ||
      q.category?.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 pb-20">
      <div className="text-center py-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Banco de Conhecimento</h2>
        <p className="text-gray-500 dark:text-gray-400">Consulte questões, respostas e explicações detalhadas.</p>
      </div>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-gray-50 dark:bg-dark-bg py-4">
        <div className="relative">
           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
           <input 
             type="text"
             placeholder="Pesquisar por termo (ex: SLA, KCS, Escalação...)"
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-card text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
           />
           <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 font-medium">
             {filteredQuestions.length} resultados
           </div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            return (
              <div 
                key={q.id} 
                className={`bg-white dark:bg-dark-card rounded-2xl border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-primary-500 shadow-md' : 'border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-gray-600'}`}
              >
                <button 
                  onClick={() => toggleExpand(q.id)}
                  className="w-full text-left p-5 flex items-start gap-4"
                >
                  <div className={`mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full text-xs font-bold ${isExpanded ? 'bg-primary-100 text-primary-700' : 'bg-gray-100 dark:bg-gray-800 text-gray-500'}`}>
                    Q{q.id}
                  </div>
                  <div className="flex-1">
                     <p className={`font-medium text-lg mb-2 ${isExpanded ? 'text-primary-800 dark:text-primary-300' : 'text-gray-800 dark:text-gray-200'}`}>
                       {q.text}
                     </p>
                     <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
                           <Tag size={10} /> {q.category || 'Geral'}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${q.difficulty === 'Fácil' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}`}>
                           {q.difficulty}
                        </span>
                     </div>
                  </div>
                  <div className="text-gray-400">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-6 pt-0 border-t border-gray-100 dark:border-dark-border bg-gray-50 dark:bg-gray-800/30">
                     <div className="mt-4 space-y-3">
                        {q.options.map((opt, idx) => (
                           <div 
                             key={idx} 
                             className={`p-3 rounded-lg text-sm border ${
                                idx === q.correctOptionIndex 
                                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 font-medium' 
                                : 'bg-white dark:bg-dark-card border-gray-200 dark:border-dark-border text-gray-500 dark:text-gray-400'
                             }`}
                           >
                              {opt}
                           </div>
                        ))}
                     </div>
                     
                     <div className="mt-6 flex gap-3">
                        <BookOpen className="text-blue-500 flex-shrink-0 mt-0.5" size={18} />
                        <div>
                           <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">Explicação</h4>
                           <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                             {q.explanation}
                           </p>
                        </div>
                     </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-20 opacity-50">
             <Search size={48} className="mx-auto mb-4 text-gray-300" />
             <p>Nenhuma questão encontrada para "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBase;