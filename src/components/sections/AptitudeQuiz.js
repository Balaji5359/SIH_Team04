import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, Brain, Award } from 'lucide-react';

const AptitudeQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      id: 1,
      question: "What type of problems do you enjoy solving most?",
      options: [
        "Mathematical equations and logical puzzles",
        "Creative design and artistic challenges",
        "Human behavior and social issues",
        "Business strategies and market analysis"
      ]
    },
    {
      id: 2,
      question: "In your free time, you prefer to:",
      options: [
        "Read science articles or watch documentaries",
        "Create art, music, or write stories",
        "Volunteer or help others in your community",
        "Learn about investments and entrepreneurship"
      ]
    }
  ];

  const results = [
    { stream: "Engineering & Technology", score: 92, color: "bg-blue-500" },
    { stream: "Medical Sciences", score: 88, color: "bg-green-500" },
    { stream: "Creative Arts", score: 75, color: "bg-purple-500" }
  ];

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="w-8 h-8 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Aptitude & Interest Quiz</h2>
      </div>

      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Question {currentQuestion + 1} of {questions.length}
            </div>

            {/* Question */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    className="w-full text-left p-4 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-gray-500 transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="text-gray-700 dark:text-gray-200">{option}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Quiz Complete!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Here are your top 3 recommended streams based on your responses:
              </p>
            </div>

            <div className="space-y-4">
              {results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {result.stream}
                    </h4>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {result.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <motion.div
                      className={`${result.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${result.score}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(0);
                setAnswers([]);
              }}
              className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
            >
              Retake Quiz
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AptitudeQuiz;