import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StudyMode from './pages/StudyMode';
import SimulationMode from './pages/SimulationMode';
import SmartReview from './pages/SmartReview';
import KnowledgeBase from './pages/KnowledgeBase';
import History from './pages/History';
import SurvivalMode from './pages/SurvivalMode';
import { AppRoute } from './types';
import { ProgressProvider } from './context/ProgressContext';

const App: React.FC = () => {
  return (
    <ProgressProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
            <Route path={AppRoute.STUDY} element={<StudyMode />} />
            <Route path={AppRoute.SIMULATION} element={<SimulationMode />} />
            <Route path={AppRoute.REVIEW} element={<SmartReview />} />
            <Route path={AppRoute.SURVIVAL} element={<SurvivalMode />} />
            <Route path={AppRoute.KNOWLEDGE} element={<KnowledgeBase />} />
            <Route path={AppRoute.HISTORY} element={<History />} />
            <Route path="*" element={<Navigate to={AppRoute.DASHBOARD} replace />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ProgressProvider>
  );
};

export default App;
