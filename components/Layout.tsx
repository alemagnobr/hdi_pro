import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BarChart3, GraduationCap, Repeat, Search, Moon, Sun, Flame, Zap, Linkedin, Instagram } from 'lucide-react';
import { AppRoute, NavItem } from '../types';
import { useProgress } from '../context/ProgressContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentLevel, completionPercentage, totalCorrect, darkMode, toggleDarkMode } = useProgress();

  const navItems: NavItem[] = [
    { label: 'Dashboard', icon: <LayoutDashboard size={20} />, path: AppRoute.DASHBOARD },
    { label: 'Simulado', icon: <GraduationCap size={20} />, path: AppRoute.SIMULATION },
    { label: 'Estudar', icon: <BookOpen size={20} />, path: AppRoute.STUDY },
    { label: 'Revisão', icon: <Repeat size={20} />, path: AppRoute.REVIEW },
    { label: 'Sobrevivência', icon: <Flame size={20} />, path: AppRoute.SURVIVAL },
    { label: 'Consulta', icon: <Search size={20} />, path: AppRoute.KNOWLEDGE },
    { label: 'Histórico', icon: <BarChart3 size={20} />, path: AppRoute.HISTORY },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-300">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-dark-border shadow-sm z-10 transition-colors duration-300">
        <div className="p-6 border-b border-gray-100 dark:border-dark-border flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/30">
            H
          </div>
          <h1 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">HDI SCA Practice</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isSimulation = item.path === AppRoute.SIMULATION;
              const isSurvival = item.path === AppRoute.SURVIVAL;

              let buttonClass = `w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group `;
              
              if (isSimulation) {
                buttonClass += 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-md shadow-primary-500/20 hover:shadow-lg font-semibold my-2 transform hover:-translate-y-0.5';
              } else if (isSurvival) {
                buttonClass += isActive 
                   ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-medium'
                   : 'text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10';
              } else if (isActive) {
                buttonClass += 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 font-medium';
              } else {
                buttonClass += 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white';
              }

              return (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={buttonClass}
                  >
                    <span className={isSimulation ? 'animate-pulse' : ''}>
                        {item.icon}
                    </span>
                    <span>{item.label}</span>
                    {isSimulation && <Zap size={16} className="ml-auto opacity-70 group-hover:opacity-100 fill-current" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100 dark:border-dark-border">
          {/* Dark Mode Toggle */}
          <button 
             onClick={toggleDarkMode}
             className="w-full flex items-center justify-between p-2 mb-4 rounded-lg bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
             <span className="flex items-center gap-2">
               {darkMode ? <Moon size={14} /> : <Sun size={14} />}
               {darkMode ? 'Modo Escuro' : 'Modo Claro'}
             </span>
             <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${darkMode ? 'bg-primary-600' : 'bg-gray-300'}`}>
                <div className={`w-3 h-3 bg-white rounded-full shadow-sm transform transition-transform ${darkMode ? 'translate-x-4' : 'translate-x-0'}`}></div>
             </div>
          </button>

          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-4 text-white shadow-lg shadow-primary-500/20 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-xl"></div>
            <p className="text-xs font-medium opacity-80 mb-1 relative z-10">Status Atual</p>
            <div className="flex justify-between items-end mb-1 relative z-10">
              <p className="font-bold text-lg">{currentLevel}</p>
              <span className="text-xs opacity-90 font-mono bg-white/20 px-1.5 py-0.5 rounded">{totalCorrect} XP</span>
            </div>
            
            <div className="w-full bg-black/20 h-2 rounded-full mt-2 overflow-hidden backdrop-blur-sm relative z-10">
              <div 
                className="bg-white h-full rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-[10px] mt-1.5 opacity-80 text-right font-medium relative z-10">{completionPercentage}% Concluído</p>
          </div>

          <div className="px-1">
            <p className="text-[10px] uppercase font-bold text-gray-400 dark:text-gray-500 tracking-wider mb-2">Desenvolvedor</p>
            <div className="space-y-1">
               <p className="text-xs font-bold text-gray-800 dark:text-gray-200">Alexandre M S Linhares</p>
               <p className="text-[10px] text-primary-600 dark:text-primary-400 font-medium">IaLe Hub - AI Manager</p>
            </div>
            <div className="flex gap-3 mt-3">
              <a href="https://linkedin.com/in/alemagnobr/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors" title="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://instagram.com/ialehub" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#E4405F] transition-colors" title="Instagram">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-dark-card border-b border-gray-200 dark:border-dark-border z-20 flex items-center px-4 justify-between transition-colors">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold">
            H
          </div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-white">HDI SCA Practice</h1>
        </div>
        <button onClick={toggleDarkMode} className="p-2 text-gray-500 dark:text-gray-300">
           {darkMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden md:p-0 pt-16 pb-20 md:pb-0 scroll-smooth">
        <div className="max-w-5xl mx-auto p-4 md:p-8 min-h-full flex flex-col">
           <div className="flex-1">
              {children}
           </div>

           {/* Mobile Footer Credit */}
           <div className="md:hidden mt-8 pt-8 border-t border-gray-100 dark:border-dark-border text-center pb-safe opacity-80">
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Desenvolvido por</p>
              <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Alexandre M S Linhares</p>
              <p className="text-xs text-primary-600 dark:text-primary-400 font-medium mb-3">IaLe Hub - AI Manager</p>
              <div className="flex justify-center gap-6">
                <a href="https://linkedin.com/in/alemagnobr/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0077b5]">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://instagram.com/ialehub" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#E4405F]">
                  <Instagram size={16} /> Instagram
                </a>
              </div>
           </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-card border-t border-gray-200 dark:border-dark-border z-20 pb-safe transition-colors">
        <div className="flex justify-around items-center h-16 px-1">
          {navItems.slice(0, 5).map((item) => { 
             const isActive = location.pathname === item.path;
             const isSimulation = item.path === AppRoute.SIMULATION;
             const isSurvival = item.path === AppRoute.SURVIVAL;

             let iconColor = isActive ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500';
             if (isSurvival) iconColor = isActive ? 'text-red-500' : 'text-gray-400';

             return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${iconColor}`}
              >
                {isSimulation ? (
                   <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                       isActive 
                       ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/40 -translate-y-1' 
                       : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                   }`}>
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20, strokeWidth: isActive ? 2.5 : 2 })}
                   </div>
                ) : (
                   React.cloneElement(item.icon as React.ReactElement<any>, { size: 20, strokeWidth: isActive ? 2.5 : 2 })
                )}
                
                <span className={`text-[9px] font-medium transition-all ${
                    isSimulation 
                    ? (isActive ? 'text-primary-700 dark:text-primary-300 font-bold' : 'text-primary-600 dark:text-primary-500') 
                    : ''
                }`}>
                    {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
