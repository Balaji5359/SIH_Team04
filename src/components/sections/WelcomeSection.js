import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { User, TrendingUp, Target } from 'lucide-react';

const WelcomeSection = () => {
  const aptitudeData = [
    { name: 'Science', value: 85, color: '#3b82f6' },
    { name: 'Math', value: 78, color: '#8b5cf6' },
    { name: 'Arts', value: 65, color: '#10b981' },
    { name: 'Commerce', value: 72, color: '#f59e0b' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Student Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Welcome back, Rahul!</h2>
              <p className="text-blue-100">Class 12 • Science Stream</p>
            </div>
          </div>
          
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 rounded-lg p-4"
          >
            <h3 className="font-semibold mb-2 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Your Career Journey Starts Here
            </h3>
            <p className="text-sm text-blue-100">
              Discover your potential and explore exciting career paths tailored just for you.
            </p>
          </motion.div>
        </div>

        {/* Aptitude Chart */}
        <div className="bg-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">Aptitude Score Summary</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={aptitudeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {aptitudeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Career Clarity</p>
                <p className="text-2xl font-bold">78%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-300" />
            </div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-100">Colleges Explored</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-gray-800">🎓</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WelcomeSection;