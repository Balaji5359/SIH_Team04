import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Bell, Award, BookOpen, Users } from 'lucide-react';

const TimelineTracker = () => {
  const events = [
    {
      id: 1,
      title: "JEE Main Registration",
      date: "Dec 15, 2024",
      type: "exam",
      status: "upcoming",
      daysLeft: 25,
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 2,
      title: "NEET Application Deadline",
      date: "Jan 10, 2025",
      type: "deadline",
      status: "urgent",
      daysLeft: 51,
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 3,
      title: "Merit Scholarship Applications",
      date: "Feb 1, 2025",
      type: "scholarship",
      status: "upcoming",
      daysLeft: 73,
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 4,
      title: "College Admission Counseling",
      date: "Mar 15, 2025",
      type: "admission",
      status: "upcoming",
      daysLeft: 115,
      icon: <Users className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'urgent': return 'bg-red-500';
      case 'upcoming': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'urgent': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';
      case 'upcoming': return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'completed': return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      default: return 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600';
    }
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Calendar className="w-8 h-8 text-blue-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Timeline Tracker & Notifications
          </h2>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Bell className="w-4 h-4" />
          <span>Enable Notifications</span>
        </motion.button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-4 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Urgent Deadlines</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <Clock className="w-8 h-8 opacity-80" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-4 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Upcoming Events</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Calendar className="w-8 h-8 opacity-80" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Completed</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <Award className="w-8 h-8 opacity-80" />
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        
        <div className="space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start space-x-4"
            >
              {/* Timeline Dot */}
              <div className={`relative z-10 w-4 h-4 rounded-full ${getStatusColor(event.status)} flex items-center justify-center`}>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Event Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`flex-1 rounded-xl p-4 border-2 ${getStatusBg(event.status)} cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getStatusColor(event.status)} text-white`}>
                      {event.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {event.daysLeft} days left
                    </p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      event.status === 'urgent' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                        : event.status === 'upcoming'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                
                {event.status === 'urgent' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 bg-red-100 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800"
                  >
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4 text-red-600 dark:text-red-400" />
                      <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        Reminder: Don't miss this important deadline!
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add Event Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
        >
          Add Custom Event
        </motion.button>
      </motion.div>
    </section>
  );
};

export default TimelineTracker;