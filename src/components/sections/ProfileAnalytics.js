import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { User, TrendingUp, BookmarkCheck, History, Target } from 'lucide-react';

const ProfileAnalytics = () => {
  const progressData = [
    { month: 'Sep', clarity: 45 },
    { month: 'Oct', clarity: 62 },
    { month: 'Nov', clarity: 78 },
    { month: 'Dec', clarity: 78 }
  ];

  const interestData = [
    { category: 'Science', score: 85 },
    { category: 'Technology', score: 92 },
    { category: 'Arts', score: 65 },
    { category: 'Sports', score: 70 },
    { category: 'Business', score: 75 }
  ];

  const recentActivities = [
    { action: 'Completed Engineering Quiz', time: '2 hours ago', type: 'quiz' },
    { action: 'Saved IIT Delhi to favorites', time: '1 day ago', type: 'college' },
    { action: 'Explored VR Doctor Experience', time: '3 days ago', type: 'vr' },
    { action: 'Compared 3 courses', time: '1 week ago', type: 'comparison' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'quiz': return '📝';
      case 'college': return '🏫';
      case 'vr': return '🥽';
      case 'comparison': return '⚖️';
      default: return '📊';
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <User className="w-8 h-8 text-indigo-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Profile & Analytics
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Rahul Sharma</h3>
                <p className="opacity-90">Class 12 • Science</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-2xl font-bold">17</p>
                <p className="text-sm opacity-90">Age</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-2xl font-bold">Mumbai</p>
                <p className="text-sm opacity-90">Location</p>
              </div>
            </div>
          </motion.div>

          {/* Career Clarity Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Target className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Career Clarity
              </h3>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">78%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '78%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You're making great progress! Complete more quizzes to reach 90%.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center"
            >
              <BookmarkCheck className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Saved Colleges</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 text-center"
            >
              <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Quizzes Taken</p>
            </motion.div>
          </div>
        </div>

        {/* Analytics Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Career Clarity Progress
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="clarity" 
                    stroke="#8b5cf6" 
                    strokeWidth={3}
                    dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Interest Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Interest Analysis
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={interestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <History className="w-5 h-5 text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Recent Activity
              </h3>
            </div>
            
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-600 rounded-lg"
                >
                  <span className="text-2xl">{getActivityIcon(activity.type)}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileAnalytics;