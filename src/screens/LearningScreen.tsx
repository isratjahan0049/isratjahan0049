import React, { useState } from 'react'
import { Play, BookOpen, Award, Clock } from 'lucide-react'
import { motion } from 'framer-motion'

const LearningScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All', emoji: '🌍' },
    { id: 'climate', name: 'Climate', emoji: '🌡️' },
    { id: 'wildlife', name: 'Wildlife', emoji: '🦋' },
    { id: 'pollution', name: 'Pollution', emoji: '🏭' },
    { id: 'conservation', name: 'Conservation', emoji: '♻️' },
  ]

  const lessons = [
    {
      id: 1,
      title: 'জলবায়ু পরিবর্তন কী?',
      titleEn: 'What is Climate Change?',
      duration: '5 min',
      level: 'Beginner',
      category: 'climate',
      thumbnail: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
      completed: true
    },
    {
      id: 2,
      title: 'বন্যপ্রাণী সংরক্ষণ',
      titleEn: 'Wildlife Conservation',
      duration: '8 min',
      level: 'Intermediate',
      category: 'wildlife',
      thumbnail: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400',
      completed: false
    },
    {
      id: 3,
      title: 'প্লাস্টিক দূষণ',
      titleEn: 'Plastic Pollution',
      duration: '6 min',
      level: 'Beginner',
      category: 'pollution',
      thumbnail: 'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=400',
      completed: false
    },
    {
      id: 4,
      title: 'পুনর্ব্যবহারের গুরুত্ব',
      titleEn: 'Importance of Recycling',
      duration: '7 min',
      level: 'Beginner',
      category: 'conservation',
      thumbnail: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
      completed: true
    },
  ]

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  const achievements = [
    { name: 'First Lesson', icon: '🎓', earned: true },
    { name: 'Climate Expert', icon: '🌡️', earned: true },
    { name: 'Wildlife Friend', icon: '🦋', earned: false },
    { name: 'Eco Warrior', icon: '♻️', earned: false },
  ]

  return (
    <div className="px-4 space-y-6">
      {/* Progress Overview */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold mb-4">Learning Progress</h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">65%</p>
            <p className="text-sm opacity-90">Completed</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm opacity-90">Lessons Done</p>
          </div>
        </div>
        <div className="mt-4 bg-white/20 rounded-full h-2">
          <div className="bg-white rounded-full h-2 w-2/3"></div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Categories</h3>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-mint-green bg-mint-green text-white'
                  : 'border-sage-green text-forest-green hover:border-mint-green'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Lessons */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-forest-green">Lessons</h3>
        {filteredLessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            className="bg-white rounded-2xl p-4 card-shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={lesson.thumbnail}
                  alt={lesson.titleEn}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                {lesson.completed && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-mint-green rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-forest-green">{lesson.title}</h4>
                <p className="text-sm text-gray-600 mb-1">{lesson.titleEn}</p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {lesson.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {lesson.level}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Achievements</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-3 rounded-xl border-2 text-center ${
                achievement.earned
                  ? 'border-mint-green bg-mint-green/10'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className={`text-2xl mb-1 ${achievement.earned ? '' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <p className={`text-sm font-medium ${
                achievement.earned ? 'text-forest-green' : 'text-gray-400'
              }`}>
                {achievement.name}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default LearningScreen