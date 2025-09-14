import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Filter, Heart, Star, Wifi, Home, BookOpen } from 'lucide-react';

const CollegeDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [savedColleges, setSavedColleges] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const colleges = [
    {
      id: 1,
      name: "IIT Delhi",
      location: "New Delhi",
      programs: ["B.Tech CSE", "B.Tech EE", "B.Tech ME"],
      cutoff: "JEE Rank: 1-500",
      facilities: ["hostel", "lab", "library", "wifi"],
      rating: 4.8,
      type: "engineering"
    },
    {
      id: 2,
      name: "AIIMS Delhi",
      location: "New Delhi",
      programs: ["MBBS", "BDS", "B.Sc Nursing"],
      cutoff: "NEET Score: 650+",
      facilities: ["hostel", "lab", "library"],
      rating: 4.9,
      type: "medical"
    },
    {
      id: 3,
      name: "Delhi University",
      location: "New Delhi",
      programs: ["B.A", "B.Com", "B.Sc"],
      cutoff: "12th: 85%+",
      facilities: ["library", "wifi"],
      rating: 4.5,
      type: "general"
    }
  ];

  const facilityIcons = {
    hostel: <Home className="w-4 h-4" />,
    lab: <BookOpen className="w-4 h-4" />,
    library: <BookOpen className="w-4 h-4" />,
    wifi: <Wifi className="w-4 h-4" />
  };

  const toggleSaveCollege = (collegeId) => {
    setSavedColleges(prev => 
      prev.includes(collegeId) 
        ? prev.filter(id => id !== collegeId)
        : [...prev, collegeId]
    );
  };

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || college.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <MapPin className="w-8 h-8 text-green-500" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Nearby Government Colleges
        </h2>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search colleges by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Types</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 200 }}
        className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mb-6 flex items-center justify-center"
      >
        <div className="text-white text-center">
          <MapPin className="w-12 h-12 mx-auto mb-2" />
          <p className="text-lg font-semibold">Interactive Map View</p>
          <p className="text-sm opacity-90">Colleges near your location</p>
        </div>
      </motion.div>

      {/* College Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college, index) => (
          <motion.div
            key={college.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {college.name}
                </h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {college.location}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleSaveCollege(college.id)}
                className={`p-2 rounded-full transition-colors ${
                  savedColleges.includes(college.id)
                    ? 'bg-red-100 text-red-500'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-500'
                }`}
              >
                <Heart className={`w-5 h-5 ${savedColleges.includes(college.id) ? 'fill-current' : ''}`} />
              </motion.button>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-1 mb-3">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {college.rating}
              </span>
            </div>

            {/* Programs */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Programs Offered
              </h4>
              <div className="flex flex-wrap gap-1">
                {college.programs.map((program, idx) => (
                  <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    {program}
                  </span>
                ))}
              </div>
            </div>

            {/* Cutoff */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">Cutoff:</span> {college.cutoff}
              </p>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Facilities
              </h4>
              <div className="flex space-x-2">
                {college.facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-400">
                    {facilityIcons[facility]}
                    <span className="capitalize">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-200"
            >
              View Details
            </motion.button>
          </motion.div>
        ))}
      </div>

      {filteredColleges.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No colleges found matching your criteria.
          </p>
        </div>
      )}
    </section>
  );
};

export default CollegeDirectory;