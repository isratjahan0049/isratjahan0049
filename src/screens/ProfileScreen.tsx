import React from 'react'
import { User, Award, Activity, Settings, TreePine, AlertTriangle, Vote, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const ProfileScreen: React.FC = () => {
  const userStats = [
    { label: 'Trees Planted', value: 23, icon: TreePine, color: 'from-mint-green to-forest-green' },
    { label: 'Reports Made', value: 15, icon: AlertTriangle, color: 'from-red-400 to-red-600' },
    { label: 'Votes Cast', value: 34, icon: Vote, color: 'from-blue-400 to-blue-600' },
    { label: 'Lessons Completed', value: 12, icon: BookOpen, color: 'from-earth-yellow to-orange-500' },
  ]

  const badges = [
    { name: 'Tree Planter', icon: '🌱', earned: true, description: 'Planted your first tree' },
    { name: 'Pollution Fighter', icon: '🛡️', earned: true, description: 'Made 10 pollution reports' },
    { name: 'Community Leader', icon: '👑', earned: true, description: 'Top 10 in district ranking' },
    { name: 'Learning Champion', icon: '🎓', earned: false, description: 'Complete 20 lessons' },
    { name: 'Eco Warrior', icon: '⚔️', earned: false, description: 'Reach 1000 points' },
    { name: 'Green Influencer', icon: '📢', earned: false, description: 'Get 100 followers' },
  ]

  const recentActivity = [
    { action: 'Planted a Neem tree', location: 'Ramna Park', time: '2 hours ago', type: 'tree' },
    { action: 'Reported plastic waste', location: 'Dhanmondi Lake', time: '1 day ago', type: 'report' },
    { action: 'Voted for cleanup priority', location: 'Community Poll', time: '2 days ago', type: 'vote' },
    { action: 'Completed lesson on Climate Change', location: 'Learning Module', time: '3 days ago', type: 'learn' },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'tree': return TreePine
      case 'report': return AlertTriangle
      case 'vote': return Vote
      case 'learn': return BookOpen
      default: return Activity
    }
  }

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'tree': return 'text-mint-green'
      case 'report': return 'text-red-500'
      case 'vote': return 'text-blue-500'
      case 'learn': return 'text-earth-yellow'
      default: return 'text-gray-500'
    }
  }

  return (
    <div className="px-4 space-y-6">
      {/* Profile Header */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center space-x-4">
          <motion.div
            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-3xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            👤
          </motion.div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">Israt Jahan</h2>
            <p className="text-sm opacity-90">IT Executive & Eco Warrior</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center space-x-1">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">Level 8</span>
              </div>
              <div className="ml-4">
                <span className="text-sm opacity-90">847 points</span>
              </div>
            </div>
          </div>
          <button className="p-2 bg-white/20 rounded-full">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress to Level 9</span>
            <span>847/1000</span>
          </div>
          <div className="bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-white rounded-full h-2"
              initial={{ width: 0 }}
              animate={{ width: '84.7%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {userStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white card-shadow`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <stat.icon className="w-8 h-8 mb-2" />
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Badges */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              className={`p-3 rounded-xl border-2 text-center ${
                badge.earned
                  ? 'border-mint-green bg-mint-green/10'
                  : 'border-gray-200 bg-gray-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-2xl mb-1 ${badge.earned ? '' : 'grayscale'}`}>
                {badge.icon}
              </div>
              <p className={`text-xs font-medium ${
                badge.earned ? 'text-forest-green' : 'text-gray-400'
              }`}>
                {badge.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => {
            const Icon = getActivityIcon(activity.type)
            return (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-forest-green">{activity.action}</p>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{activity.location}</span>
                    <span>•</span>
                    <span>{activity.time}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Impact Summary */}
      <motion.div 
        className="bg-gradient-to-r from-earth-yellow to-orange-500 rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold mb-4">Your Environmental Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">CO₂</span>
            </div>
            <p className="text-xl font-bold">584kg</p>
            <p className="text-sm opacity-90">CO₂ Prevented</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg">🌍</span>
            </div>
            <p className="text-xl font-bold">12</p>
            <p className="text-sm opacity-90">Lives Impacted</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileScreen