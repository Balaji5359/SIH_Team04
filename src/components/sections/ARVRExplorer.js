import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Play, Smartphone, Headphones, Zap } from 'lucide-react';

const ARVRExplorer = () => {
  const [selectedCareer, setSelectedCareer] = useState('doctor');

  const careers = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Experience a day in the life of a medical professional',
      preview: 'Operating room procedures, patient consultations, medical research',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'engineer',
      title: 'Software Engineer',
      description: 'Step into the world of coding and technology innovation',
      preview: 'Code development, team meetings, product launches',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'teacher',
      title: 'Teacher',
      description: 'Discover the rewarding journey of education and mentorship',
      preview: 'Classroom teaching, student interactions, curriculum planning',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "360° Career Immersion",
      description: "Experience realistic workplace environments"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "AR Career Cards",
      description: "Scan brochures for interactive career info"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "VR Mentorship",
      description: "Meet virtual mentors from different fields"
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Eye className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          AR/VR Career Explorer
        </h2>
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
          BETA
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* VR Experience Section */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white"
          >
            <h3 className="text-xl font-bold mb-4">Step into Your Future Career</h3>
            
            {/* Career Selection */}
            <div className="space-y-3 mb-6">
              {careers.map((career) => (
                <motion.button
                  key={career.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCareer(career.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedCareer === career.id
                      ? 'bg-white/20 border-2 border-white/50'
                      : 'bg-white/10 border-2 border-transparent hover:bg-white/15'
                  }`}
                >
                  <h4 className="font-semibold">{career.title}</h4>
                  <p className="text-sm opacity-90">{career.description}</p>
                </motion.button>
              ))}
            </div>

            {/* VR Preview */}
            <motion.div
              key={selectedCareer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/30 rounded-lg p-4 mb-4"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full"
                />
              </div>
              <p className="text-sm opacity-90">
                {careers.find(c => c.id === selectedCareer)?.preview}
              </p>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-purple-600 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
            >
              <Play className="w-5 h-5" />
              <span>Enter VR Mode</span>
            </motion.button>
          </motion.div>

          {/* AR Scanner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-bold mb-3">AR Career Scanner</h3>
            <p className="text-sm opacity-90 mb-4">
              Point your camera at any career brochure or textbook to unlock interactive information
            </p>
            
            <div className="bg-white/20 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-center h-32">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-16 border-2 border-dashed border-white rounded-lg flex items-center justify-center"
                >
                  <Smartphone className="w-8 h-8" />
                </motion.div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-blue-600 py-3 rounded-lg font-bold flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Start AR Scanner</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Immersive Features
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl cursor-pointer hover:shadow-md transition-all"
                >
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              System Requirements
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">VR Headset</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">Optional</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Smartphone</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">Required</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">Internet Connection</span>
                <span className="text-green-600 dark:text-green-400 font-semibold">Required</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-400">WebXR Support</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Auto-detect</span>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-6 text-white"
          >
            <h3 className="text-lg font-bold mb-2">🚀 Coming Soon</h3>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Virtual campus tours</li>
              <li>• AI-powered career counselor</li>
              <li>• Multiplayer career simulations</li>
              <li>• Real-time industry insights</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ARVRExplorer;