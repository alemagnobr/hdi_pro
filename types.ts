import React from 'react';

export enum AppRoute {
  DASHBOARD = '/',
  STUDY = '/study',
  SIMULATION = '/simulation',
  REVIEW = '/review',
  KNOWLEDGE = '/knowledge',
  HISTORY = '/history',
  SURVIVAL = '/survival',
  SETTINGS = '/settings'
}

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: AppRoute;
}

export enum Difficulty {
  EASY = 'Fácil',
  HARD = 'Difícil'
}

export interface Question {
  id: string;
  category?: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
  difficulty: Difficulty;
}

// Spaced Repetition System (SRS) Data
export interface SRSItem {
  questionId: string;
  box: number; // 0 to 5 (0 = new/forgot, 5 = mastered)
  nextReviewDate: number; // Timestamp
  lastReviewed: number; // Timestamp
}

export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  sourceType: 'youtube' | 'local';
  youtubeId?: string;
  url?: string;
  category: string;
  duration: string;
}
