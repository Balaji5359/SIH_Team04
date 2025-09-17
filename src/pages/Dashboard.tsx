import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  TrendingUp,
  Users,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Star,
  Target,
  Award,
  Calendar
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [notifications, setNotifications] = useState(3);

  const quickActions = [
    {
      title: 'Take Aptitude Quiz',
      description: 'Discover your career interests',
      icon: Target,
      path: '/quiz',
      color: 'bg-blue-500',
    },
    {
      title: 'View Recommendations',
      description: 'See personalized career suggestions',
      icon: TrendingUp,
      path: '/recommendations',
      color: 'bg-green-500',
    },
    {
      title: 'Browse Colleges',
      description: 'Find colleges near you',
      icon: GraduationCap,
      path: '/colleges',
      color: 'bg-purple-500',
    },
    {
      title: 'Notifications',
      description: 'Check updates and alerts',
      icon: Bell,
      path: '/notifications',
      color: 'bg-orange-500',
    },
  ];

  const recentActivity = [
    {
      type: 'quiz',
      title: 'Completed Aptitude Quiz',
      description: 'Your results are ready for review',
      time: '2 hours ago',
      icon: BookOpen,
    },
    {
      type: 'recommendation',
      title: 'New Career Recommendations',
      description: 'Based on your quiz results',
      time: '1 day ago',
      icon: TrendingUp,
    },
    {
      type: 'college',
      title: 'College Application Reminder',
      description: 'Deadline approaching for Govt Degree College',
      time: '3 days ago',
      icon: GraduationCap,
    },
  ];

  const stats = [
    {
      label: 'Quiz Score',
      value: '85%',
      icon: Award,
      color: 'text-yellow-500',
    },
    {
      label: 'Recommendations',
      value: '12',
      icon: Target,
      color: 'text-blue-500',
    },
    {
      label: 'Colleges Viewed',
      value: '8',
      icon: GraduationCap,
      color: 'text-green-500',
    },
    {
      label: 'Profile Complete',
      value: '75%',
      icon: Users,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <Bell className="w-6 h-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-gray-700 dark:text-gray-300">{user?.name}</span>
              </div>
              <button
                onClick={() => logout()}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user?.name}!
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Continue your career exploration journey
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.path}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {action.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{action.description}</p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`p-6 ${index !== recentActivity.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">{activity.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{activity.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{activity.time}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Progress Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Your Progress</h3>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white">Profile Completion</h4>
              <span className="text-sm text-gray-600 dark:text-gray-300">75%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Complete your profile to get better recommendations
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
