import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertTriangle, TreePine, BookOpen, Vote, Zap, Droplets } from 'lucide-react'
import { motion } from 'framer-motion'

const HomeScreen: React.FC = () => {
  const navigate = useNavigate()

  const actionCards = [
    {
      title: 'Report Pollution',
      description: 'Help clean our environment',
      icon: AlertTriangle,
      path: '/report',
      gradient: 'from-red-400 to-red-600',
      delay: 0.1
    },
    {
      title: 'Plant a Tree',
      description: 'Grow green spaces',
      icon: TreePine,
      path: '/plant',
      gradient: 'from-mint-green to-forest-green',
      delay: 0.2
    },
    {
      title: 'Learn',
      description: 'Discover nature secrets',
      icon: BookOpen,
      path: '/learn',
      gradient: 'from-earth-yellow to-orange-500',
      delay: 0.3
    },
    {
      title: 'Vote for Action',
      description: 'Choose cleanup priorities',
      icon: Vote,
      path: '/vote',
      gradient: 'from-blue-400 to-blue-600',
      delay: 0.4
    }
  ]

  const stats = [
    { label: 'Trees Planted', value: '1,247', icon: TreePine },
    { label: 'Reports Made', value: '856', icon: AlertTriangle },
    { label: 'Water Saved', value: '2.3K L', icon: Droplets },
  ]

  return (
    <div className="px-4 space-y-6">
      {/* Welcome Section */}
      <motion.div 
        className="text-center py-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-mint-green to-forest-green rounded-full flex items-center justify-center"
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
        <h2 className="text-2xl font-bold text-forest-green mb-2">Ready to Act Green?</h2>
        <p className="text-gray-600">Every small action creates a big impact</p>
      </motion.div>

      {/* Action Cards */}
      <div className="grid grid-cols-2 gap-4">
        {actionCards.map((card, index) => (
          <motion.button
            key={card.title}
            onClick={() => navigate(card.path)}
            className={`bg-gradient-to-br ${card.gradient} p-6 rounded-2xl text-white card-shadow hover:scale-105 transition-transform duration-200`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: card.delay }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <card.icon className="w-8 h-8 mb-3 mx-auto" />
            <h3 className="font-semibold text-sm mb-1">{card.title}</h3>
            <p className="text-xs opacity-90">{card.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Community Stats */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4 text-center">Community Impact</h3>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-2 bg-mint-green/20 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-forest-green" />
              </div>
              <p className="text-xl font-bold text-forest-green">{stat.value}</p>
              <p className="text-xs text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Quick Tip */}
      <motion.div 
        className="bg-gradient-to-r from-earth-yellow/20 to-orange-200/20 rounded-2xl p-4 border border-earth-yellow/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-earth-yellow rounded-full flex items-center justify-center">
            <span className="text-white font-bold">💡</span>
          </div>
          <div>
            <h4 className="font-semibold text-forest-green">Daily Tip</h4>
            <p className="text-sm text-gray-600">Turn off lights when leaving a room to save energy!</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HomeScreen