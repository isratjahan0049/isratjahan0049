import React, { useState } from 'react'
import { Trophy, Medal, Star, Users, MapPin, School } from 'lucide-react'
import { motion } from 'framer-motion'

const LeaderboardScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('district')

  const categories = [
    { id: 'district', name: 'District', icon: MapPin },
    { id: 'school', name: 'School', icon: School },
    { id: 'community', name: 'Community', icon: Users },
  ]

  const leaderboardData = {
    district: [
      { rank: 1, name: 'Dhaka', score: 2847, members: 1250, avatar: '🏙️' },
      { rank: 2, name: 'Chittagong', score: 2156, members: 890, avatar: '🌊' },
      { rank: 3, name: 'Sylhet', score: 1923, members: 675, avatar: '🌿' },
      { rank: 4, name: 'Rajshahi', score: 1654, members: 543, avatar: '🌾' },
      { rank: 5, name: 'Khulna', score: 1432, members: 456, avatar: '🐟' },
    ],
    school: [
      { rank: 1, name: 'Dhaka College', score: 1847, members: 450, avatar: '🎓' },
      { rank: 2, name: 'Notre Dame College', score: 1656, members: 390, avatar: '📚' },
      { rank: 3, name: 'Viqarunnisa Noon', score: 1523, members: 375, avatar: '🌟' },
      { rank: 4, name: 'Adamjee Cantonment', score: 1354, members: 343, avatar: '🏫' },
      { rank: 5, name: 'Holy Cross College', score: 1232, members: 256, avatar: '⭐' },
    ],
    community: [
      { rank: 1, name: 'Green Warriors', score: 3247, members: 850, avatar: '🌱' },
      { rank: 2, name: 'Eco Defenders', score: 2856, members: 690, avatar: '🛡️' },
      { rank: 3, name: 'Climate Heroes', score: 2523, members: 575, avatar: '🦸' },
      { rank: 4, name: 'Nature Guardians', score: 2154, members: 443, avatar: '🌳' },
      { rank: 5, name: 'Earth Protectors', score: 1932, members: 356, avatar: '🌍' },
    ],
  }

  const currentData = leaderboardData[selectedCategory as keyof typeof leaderboardData]

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />
      case 2: return <Medal className="w-6 h-6 text-gray-400" />
      case 3: return <Medal className="w-6 h-6 text-amber-600" />
      default: return <Star className="w-6 h-6 text-mint-green" />
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1: return 'from-yellow-400 to-yellow-600'
      case 2: return 'from-gray-300 to-gray-500'
      case 3: return 'from-amber-400 to-amber-600'
      default: return 'from-mint-green to-forest-green'
    }
  }

  return (
    <div className="px-4 space-y-6">
      {/* Header */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center"
          >
            <Trophy className="w-8 h-8" />
          </motion.div>
          <h2 className="text-xl font-bold mb-2">Environmental Champions</h2>
          <p className="text-sm opacity-90">Leading the fight for our planet</p>
        </div>
      </motion.div>

      {/* Category Selector */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Categories</h3>
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-mint-green bg-mint-green text-white'
                  : 'border-sage-green text-forest-green hover:border-mint-green'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-6 text-center">Top Performers</h3>
        <div className="flex items-end justify-center space-x-4">
          {/* 2nd Place */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center text-2xl">
              {currentData[1]?.avatar}
            </div>
            <div className="bg-gray-100 rounded-t-lg p-3 h-20 flex flex-col justify-end">
              <p className="text-sm font-semibold text-forest-green">{currentData[1]?.name}</p>
              <p className="text-xs text-gray-600">{currentData[1]?.score} pts</p>
              <div className="text-gray-400 text-lg">2</div>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-20 h-20 mx-auto mb-2 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-3xl relative">
              {currentData[0]?.avatar}
              <div className="absolute -top-2 -right-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
              </div>
            </div>
            <div className="bg-yellow-50 rounded-t-lg p-4 h-24 flex flex-col justify-end">
              <p className="font-bold text-forest-green">{currentData[0]?.name}</p>
              <p className="text-sm text-gray-600">{currentData[0]?.score} pts</p>
              <div className="text-yellow-500 text-xl font-bold">1</div>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-2xl">
              {currentData[2]?.avatar}
            </div>
            <div className="bg-amber-50 rounded-t-lg p-3 h-16 flex flex-col justify-end">
              <p className="text-sm font-semibold text-forest-green">{currentData[2]?.name}</p>
              <p className="text-xs text-gray-600">{currentData[2]?.score} pts</p>
              <div className="text-amber-500 text-lg">3</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Full Rankings</h3>
        <div className="space-y-3">
          {currentData.map((item, index) => (
            <motion.div
              key={item.rank}
              className={`flex items-center space-x-4 p-4 rounded-xl ${
                item.rank <= 3 ? 'bg-gradient-to-r ' + getRankColor(item.rank) + ' text-white' : 'bg-gray-50'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  item.rank <= 3 ? 'bg-white/20' : 'bg-mint-green/20'
                }`}>
                  {item.rank <= 3 ? (
                    getRankIcon(item.rank)
                  ) : (
                    <span className={`font-bold ${item.rank <= 3 ? 'text-white' : 'text-forest-green'}`}>
                      {item.rank}
                    </span>
                  )}
                </div>
                <div className="text-2xl">{item.avatar}</div>
              </div>
              
              <div className="flex-1">
                <h4 className={`font-semibold ${item.rank <= 3 ? 'text-white' : 'text-forest-green'}`}>
                  {item.name}
                </h4>
                <div className="flex items-center space-x-4 text-sm">
                  <span className={item.rank <= 3 ? 'text-white/80' : 'text-gray-600'}>
                    {item.score} points
                  </span>
                  <span className={`flex items-center ${item.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    <Users className="w-3 h-3 mr-1" />
                    {item.members}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Your Ranking */}
      <motion.div 
        className="bg-gradient-to-r from-earth-yellow to-orange-500 rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h3 className="text-lg font-semibold mb-4">Your Position</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h4 className="font-semibold">You</h4>
              <p className="text-sm opacity-90">Rank #12 in District</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">847</p>
            <p className="text-sm opacity-90">points</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default LeaderboardScreen