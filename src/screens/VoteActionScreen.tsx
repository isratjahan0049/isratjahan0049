import React, { useState } from 'react'
import { Vote, MapPin, Users, Clock, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const VoteActionScreen: React.FC = () => {
  const [selectedPoll, setSelectedPoll] = useState<number | null>(null)

  const activePolls = [
    {
      id: 1,
      title: 'Priority Cleanup Location',
      description: 'Which area needs immediate attention?',
      options: [
        { id: 'a', text: 'Buriganga River Bank', votes: 245, percentage: 45 },
        { id: 'b', text: 'Ramna Park Area', votes: 189, percentage: 35 },
        { id: 'c', text: 'Dhanmondi Lake', votes: 108, percentage: 20 },
      ],
      totalVotes: 542,
      timeLeft: '2 days',
      category: 'cleanup'
    },
    {
      id: 2,
      title: 'Tree Planting Campaign',
      description: 'Which tree species should we focus on?',
      options: [
        { id: 'a', text: 'Neem Trees', votes: 156, percentage: 52 },
        { id: 'b', text: 'Mango Trees', votes: 89, percentage: 30 },
        { id: 'c', text: 'Banyan Trees', votes: 54, percentage: 18 },
      ],
      totalVotes: 299,
      timeLeft: '5 days',
      category: 'planting'
    },
    {
      id: 3,
      title: 'Plastic Ban Initiative',
      description: 'What should be banned first?',
      options: [
        { id: 'a', text: 'Single-use bags', votes: 312, percentage: 60 },
        { id: 'b', text: 'Plastic bottles', votes: 156, percentage: 30 },
        { id: 'c', text: 'Food containers', votes: 52, percentage: 10 },
      ],
      totalVotes: 520,
      timeLeft: '1 day',
      category: 'policy'
    },
  ]

  const handleVote = (pollId: number, optionId: string) => {
    setSelectedPoll(pollId)
    // Simulate vote submission
    setTimeout(() => {
      alert('Vote submitted successfully!')
      setSelectedPoll(null)
    }, 1000)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'cleanup': return 'from-red-400 to-red-600'
      case 'planting': return 'from-mint-green to-forest-green'
      case 'policy': return 'from-blue-400 to-blue-600'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cleanup': return '🧹'
      case 'planting': return '🌱'
      case 'policy': return '📋'
      default: return '📊'
    }
  }

  return (
    <div className="px-4 space-y-6">
      {/* Header Stats */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold mb-4">Community Voice</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Vote className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl font-bold">1,361</p>
            <p className="text-xs opacity-90">Total Votes</p>
          </div>
          <div className="text-center">
            <Users className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl font-bold">847</p>
            <p className="text-xs opacity-90">Participants</p>
          </div>
          <div className="text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2" />
            <p className="text-xl font-bold">3</p>
            <p className="text-xs opacity-90">Active Polls</p>
          </div>
        </div>
      </motion.div>

      {/* Active Polls */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-forest-green">Active Polls</h3>
        {activePolls.map((poll, index) => (
          <motion.div
            key={poll.id}
            className="bg-white rounded-2xl p-6 card-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {/* Poll Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(poll.category)} rounded-full flex items-center justify-center text-white`}>
                  <span className="text-lg">{getCategoryIcon(poll.category)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-forest-green">{poll.title}</h4>
                  <p className="text-sm text-gray-600">{poll.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-orange-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {poll.timeLeft}
                </div>
                <p className="text-xs text-gray-500">{poll.totalVotes} votes</p>
              </div>
            </div>

            {/* Poll Options */}
            <div className="space-y-3">
              {poll.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleVote(poll.id, option.id)}
                  disabled={selectedPoll === poll.id}
                  className="w-full text-left p-3 rounded-xl border-2 border-gray-200 hover:border-mint-green transition-all disabled:opacity-50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-forest-green">{option.text}</span>
                    <span className="text-sm text-gray-600">{option.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-mint-green to-forest-green h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${option.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{option.votes} votes</p>
                </button>
              ))}
            </div>

            {/* Location Info */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Dhaka Division</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Your Impact */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Your Voting Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-mint-green/10 rounded-xl">
            <Vote className="w-8 h-8 mx-auto mb-2 text-mint-green" />
            <p className="text-xl font-bold text-forest-green">23</p>
            <p className="text-sm text-gray-600">Votes Cast</p>
          </div>
          <div className="text-center p-4 bg-earth-yellow/10 rounded-xl">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-earth-yellow" />
            <p className="text-xl font-bold text-forest-green">89%</p>
            <p className="text-sm text-gray-600">Influence Rate</p>
          </div>
        </div>
      </motion.div>

      {/* Create Poll CTA */}
      <motion.button
        className="w-full bg-gradient-to-r from-earth-yellow to-orange-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Vote className="w-5 h-5" />
        <span>Suggest New Poll</span>
      </motion.button>
    </div>
  )
}

export default VoteActionScreen