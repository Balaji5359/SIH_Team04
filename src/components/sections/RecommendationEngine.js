import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Star, Briefcase, BookOpen, ArrowRight, GitCompare } from 'lucide-react';

const RecommendationEngine = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [showComparison, setShowComparison] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Computer Science Engineering",
      description: "Build the future with code, AI, and innovative technology solutions.",
      stream: "Engineering",
      similarity: 95,
      careers: ["Software Developer", "Data Scientist", "AI Engineer"],
      exams: ["JEE Main", "JEE Advanced", "BITSAT"],
      jobs: "High demand, ₹8-25 LPA starting"
    },
    {
      id: 2,
      title: "Medicine (MBBS)",
      description: "Heal lives and make a meaningful impact on human health.",
      stream: "Medical",
      similarity: 88,
      careers: ["Doctor", "Surgeon", "Medical Researcher"],
      exams: ["NEET", "AIIMS", "JIPMER"],
      jobs: "Stable career, ₹6-15 LPA starting"
    },
    {
      id: 3,
      title: "Business Administration",
      description: "Lead organizations and drive business growth strategies.",
      stream: "Management",
      similarity: 82,
      careers: ["Business Analyst", "Manager", "Entrepreneur"],
      exams: ["CAT", "XAT", "GMAT"],
      jobs: "Leadership roles, ₹7-20 LPA starting"
    }
  ];

  const toggleCourseSelection = (courseId) => {
    setSelectedCourses(prev => {
      if (prev.includes(courseId)) {
        return prev.filter(id => id !== courseId);
      } else if (prev.length < 3) {
        return [...prev, courseId];
      }
      return prev;
    });
  };

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Lightbulb className="w-8 h-8 text-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Personalized Recommendations
          </h2>
        </div>
        
        {selectedCourses.length >= 2 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowComparison(!showComparison)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <GitCompare className="w-4 h-4" />
            <span>Compare ({selectedCourses.length})</span>
          </motion.button>
        )}
      </div>

      {!showComparison ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-gray-50 dark:bg-gray-700 rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                selectedCourses.includes(course.id) 
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                  : 'border-transparent hover:border-gray-300'
              }`}
              onClick={() => toggleCourseSelection(course.id)}
            >
              {/* Similarity Score */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                    {course.similarity}% Match
                  </span>
                </div>
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                  {course.stream}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {course.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {course.description}
              </p>

              {/* Career Options */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Briefcase className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Career Options
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.careers.map((career, idx) => (
                      <span key={idx} className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                        {career}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Entrance Exams
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {course.exams.map((exam, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    💼 {course.jobs}
                  </p>
                </div>
              </div>

              <motion.div
                className="mt-4 flex items-center text-blue-500 text-sm font-semibold"
                whileHover={{ x: 5 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Course Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="text-left py-3 text-gray-700 dark:text-gray-300">Feature</th>
                  {selectedCourses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return (
                      <th key={courseId} className="text-left py-3 text-gray-700 dark:text-gray-300">
                        {course.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100 dark:border-gray-600">
                  <td className="py-3 font-semibold text-gray-700 dark:text-gray-300">Match Score</td>
                  {selectedCourses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return (
                      <td key={courseId} className="py-3 text-gray-600 dark:text-gray-400">
                        {course.similarity}%
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-600">
                  <td className="py-3 font-semibold text-gray-700 dark:text-gray-300">Stream</td>
                  {selectedCourses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return (
                      <td key={courseId} className="py-3 text-gray-600 dark:text-gray-400">
                        {course.stream}
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-gray-700 dark:text-gray-300">Job Market</td>
                  {selectedCourses.map(courseId => {
                    const course = courses.find(c => c.id === courseId);
                    return (
                      <td key={courseId} className="py-3 text-gray-600 dark:text-gray-400">
                        {course.jobs}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default RecommendationEngine;