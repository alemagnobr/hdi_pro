import React, { createContext, useContext, useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { SRSItem } from '../types';

// Tipos para estatísticas detalhadas
export interface CategoryStat {
  name: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface SessionResult {
  id: number;
  date: string;
  title: string;
  totalAnswered: number;
  correct: number;
  incorrect: number;
  accuracy: number;
  bestCategories: CategoryStat[];
  weakCategories: CategoryStat[];
  passed?: boolean; // Para simulados
}

interface ProgressData {
  totalAnswered: number;
  totalCorrect: number;
  currentLevel: string;
  nextLevelThreshold: number;
  progressPercentage: number; 
  completionPercentage: number;
  sessions: SessionResult[];
  srsItems: Record<string, SRSItem>; // Mapa de ID -> Dados SRS
  survivalHighScore: number;
  darkMode: boolean;
}

interface ProgressContextType extends ProgressData {
  addResult: (isCorrect: boolean, questionId: string) => void;
  addSession: (session: Omit<SessionResult, 'id' | 'date'>) => void;
  updateSurvivalScore: (score: number) => void;
  clearHistory: () => void;
  toggleDarkMode: () => void;
  getDueQuestions: () => string[]; // Retorna IDs para revisar
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

// Intervalos de revisão em horas para cada caixa (Box 0 a 5)
// Box 0: Revisar Agora/Amanhã
// Box 1: 1 dia
// Box 2: 3 dias
// Box 3: 1 semana
// Box 4: 2 semanas
// Box 5: 1 mês
const SRS_INTERVALS_HOURS = [0, 24, 72, 168, 336, 720];

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('hdi_sca_progress');
    const parsed = saved ? JSON.parse(saved) : {};
    
    // Migração de dados antigos se necessário
    return {
      totalAnswered: parsed.totalAnswered || 0,
      totalCorrect: parsed.totalCorrect || 0,
      sessions: parsed.sessions || [],
      srsItems: parsed.srsItems || {},
      survivalHighScore: parsed.survivalHighScore || 0,
      darkMode: parsed.darkMode || false
    };
  });

  useEffect(() => {
    localStorage.setItem('hdi_sca_progress', JSON.stringify(stats));
    
    if (stats.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [stats]);

  const toggleDarkMode = () => {
    setStats((prev: any) => ({ ...prev, darkMode: !prev.darkMode }));
  };

  // Processa a lógica de repetição espaçada
  const processSRSAnswer = (prevItems: Record<string, SRSItem>, questionId: string, isCorrect: boolean): Record<string, SRSItem> => {
    const currentItem = prevItems[questionId] || { questionId, box: 0, nextReviewDate: 0, lastReviewed: 0 };
    const now = Date.now();
    
    let newBox = currentItem.box;
    
    if (isCorrect) {
      // Se acertou, sobe de caixa (até o máximo de 5)
      newBox = Math.min(newBox + 1, 5);
    } else {
      // Se errou, volta para a caixa 0 (revisar logo)
      newBox = 0;
    }

    const hoursToAdd = SRS_INTERVALS_HOURS[newBox];
    const nextReview = now + (hoursToAdd * 60 * 60 * 1000);

    return {
      ...prevItems,
      [questionId]: {
        questionId,
        box: newBox,
        lastReviewed: now,
        nextReviewDate: nextReview
      }
    };
  };

  const addResult = (isCorrect: boolean, questionId: string) => {
    setStats((prev: any) => {
      // Atualiza SRS
      const newSrsItems = processSRSAnswer(prev.srsItems, questionId, isCorrect);

      return {
        ...prev,
        totalAnswered: prev.totalAnswered + 1,
        totalCorrect: prev.totalCorrect + (isCorrect ? 1 : 0),
        srsItems: newSrsItems
      };
    });
  };

  const updateSurvivalScore = (score: number) => {
    setStats((prev: any) => ({
      ...prev,
      survivalHighScore: Math.max(prev.survivalHighScore, score)
    }));
  };

  const addSession = (sessionData: Omit<SessionResult, 'id' | 'date'>) => {
    const newSession: SessionResult = {
      ...sessionData,
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR')
    };
    
    setStats((prev: any) => ({
      ...prev,
      sessions: [newSession, ...prev.sessions]
    }));
  };

  const clearHistory = () => {
     setStats((prev: any) => ({
        ...prev,
        totalAnswered: 0,
        totalCorrect: 0,
        sessions: [],
        srsItems: {},
        survivalHighScore: 0
     }));
  };

  const getDueQuestions = (): string[] => {
    const now = Date.now();
    return Object.values(stats.srsItems as Record<string, SRSItem>)
      .filter((item: SRSItem) => item.nextReviewDate <= now) // Vencidas
      .map((item: SRSItem) => item.questionId);
  };

  // Gamificação (Níveis)
  const calculateLevel = (correct: number) => {
    if (correct < 50) return { name: 'Iniciante', next: 50, prev: 0 };
    if (correct < 150) return { name: 'Aprendiz', next: 150, prev: 50 };
    if (correct < 300) return { name: 'Analista', next: 300, prev: 150 };
    if (correct < 500) return { name: 'Especialista', next: 500, prev: 300 };
    return { name: 'Mestre SCA', next: 1000, prev: 500 }; 
  };

  const levelInfo = calculateLevel(stats.totalCorrect);
  const totalQuestions = questions.length;
  const completionPercentage = Math.min(100, Math.round((stats.totalCorrect / (totalQuestions * 3)) * 100));
  const range = levelInfo.next - levelInfo.prev;
  const currentInLevel = stats.totalCorrect - levelInfo.prev;
  const progressPercentage = Math.min(100, Math.max(0, Math.round((currentInLevel / range) * 100)));

  const value = {
    totalAnswered: stats.totalAnswered,
    totalCorrect: stats.totalCorrect,
    currentLevel: levelInfo.name,
    nextLevelThreshold: levelInfo.next,
    progressPercentage, 
    completionPercentage,
    sessions: stats.sessions,
    srsItems: stats.srsItems,
    survivalHighScore: stats.survivalHighScore,
    darkMode: stats.darkMode,
    addResult,
    addSession,
    updateSurvivalScore,
    clearHistory,
    toggleDarkMode,
    getDueQuestions
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
