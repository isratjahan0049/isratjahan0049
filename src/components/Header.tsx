import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowLeft, Bell, Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const getTitle = () => {
    switch (location.pathname) {
      case '/report': return 'Report Pollution'
      case '/plant': return 'Plant a Tree'
      case '/learn': return 'Learn'
      case '/vote': return 'Vote for Action'
      case '/leaderboard': return 'Leaderboard'
      case '/map': return 'Green Map'
      case '/profile': return 'Profile'
      default: return 'OxyBee'
    }
  }

  return (
    <motion.header 
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50 ${
        isHome ? 'gradient-bg text-white' : 'bg-white border-b border-sage-green/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {!isHome ? (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-sage-green/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-forest-green" />
          </button>
        ) : (
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Leaf className="w-6 h-6" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold">OxyBee</h1>
              <p className="text-xs opacity-90">Breathe Green, Act Clean</p>
            </div>
          </div>
        )}

        {!isHome && (
          <h1 className="text-lg font-semibold text-forest-green">{getTitle()}</h1>
        )}

        <button className={`p-2 rounded-full transition-colors ${
          isHome ? 'hover:bg-white/10' : 'hover:bg-sage-green/10'
        }`}>
          <Bell className={`w-5 h-5 ${isHome ? 'text-white' : 'text-forest-green'}`} />
        </button>
      </div>
    </motion.header>
  )
}

export default Header