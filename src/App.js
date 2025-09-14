import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Globe } from 'lucide-react';
import WelcomeSection from './components/sections/WelcomeSection';
import AptitudeQuiz from './components/sections/AptitudeQuiz';
import RecommendationEngine from './components/sections/RecommendationEngine';
import CollegeDirectory from './components/sections/CollegeDirectory';
import TimelineTracker from './components/sections/TimelineTracker';
import ARVRExplorer from './components/sections/ARVRExplorer';
import ProfileAnalytics from './components/sections/ProfileAnalytics';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Student Guidance</h1>
            </motion.div>
            
            <div className="flex items-center space-x-4">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 text-sm"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
                <option value="te">తెలుగు</option>
              </select>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <WelcomeSection />
          <AptitudeQuiz />
          <RecommendationEngine />
          <CollegeDirectory />
          <TimelineTracker />
          <ARVRExplorer />
          <ProfileAnalytics />
        </div>
      </main>
    </div>
  );
}

export default App;