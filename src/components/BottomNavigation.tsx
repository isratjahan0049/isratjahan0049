import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Home, MapPin, Trophy, User } from 'lucide-react'
import { motion } from 'framer-motion'

const BottomNavigation: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/map', icon: MapPin, label: 'Map' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <motion.nav 
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-sage-green/20 px-4 py-2"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-around">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'text-forest-green bg-mint-green/20' 
                  : 'text-gray-500 hover:text-forest-green'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'animate-bounce-slow' : ''}`} />
              <span className="text-xs font-medium">{label}</span>
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default BottomNavigation