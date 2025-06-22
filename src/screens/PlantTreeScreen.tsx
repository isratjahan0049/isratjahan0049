import React, { useState } from 'react'
import { TreePine, MapPin, Calendar, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const PlantTreeScreen: React.FC = () => {
  const [selectedTree, setSelectedTree] = useState('')
  const [selectedDate, setSelectedDate] = useState('')

  const treeTypes = [
    { id: 'mango', name: 'Mango Tree', emoji: '🥭', benefits: 'Fruit & Shade', co2: '22kg/year' },
    { id: 'neem', name: 'Neem Tree', emoji: '🌿', benefits: 'Medicine & Air Purifier', co2: '48kg/year' },
    { id: 'banyan', name: 'Banyan Tree', emoji: '🌳', benefits: 'Oxygen & Wildlife', co2: '50kg/year' },
    { id: 'coconut', name: 'Coconut Tree', emoji: '🥥', benefits: 'Food & Materials', co2: '25kg/year' },
  ]

  const upcomingEvents = [
    { date: 'Dec 15', location: 'Ramna Park', participants: 45 },
    { date: 'Dec 22', location: 'Dhanmondi Lake', participants: 32 },
    { date: 'Dec 29', location: 'Gulshan Park', participants: 28 },
  ]

  return (
    <div className="px-4 space-y-6">
      {/* Tree Selection */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Choose Your Tree</h3>
        <div className="space-y-3">
          {treeTypes.map((tree) => (
            <button
              key={tree.id}
              onClick={() => setSelectedTree(tree.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                selectedTree === tree.id
                  ? 'border-mint-green bg-mint-green/10'
                  : 'border-gray-200 hover:border-sage-green'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{tree.emoji}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-forest-green">{tree.name}</h4>
                  <p className="text-sm text-gray-600">{tree.benefits}</p>
                  <p className="text-xs text-mint-green font-medium">Absorbs {tree.co2} CO₂</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Planting Events */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Join Community Events</h3>
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <motion.button
              key={index}
              className="w-full p-4 rounded-xl bg-gradient-to-r from-mint-green/10 to-sage-green/10 border border-mint-green/20 hover:border-mint-green/40 transition-all text-left"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-mint-green/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-forest-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green">{event.date}</h4>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {event.location}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-mint-green">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{event.participants}</span>
                  </div>
                  <p className="text-xs text-gray-500">participants</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Personal Planting */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Plant on Your Own</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-forest-green mb-2">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full p-3 border border-sage-green/30 rounded-xl focus:outline-none focus:border-mint-green"
            />
          </div>
          <div className="flex items-center space-x-3 p-3 bg-sage-green/10 rounded-xl">
            <MapPin className="w-5 h-5 text-mint-green" />
            <div>
              <h4 className="font-semibold text-forest-green">Your Location</h4>
              <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Impact Stats */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-4">Your Tree Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <TreePine className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm opacity-90">Trees Planted</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">CO₂</span>
            </div>
            <p className="text-2xl font-bold">384kg</p>
            <p className="text-sm opacity-90">CO₂ Absorbed</p>
          </div>
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.button
        className="w-full bg-gradient-to-r from-earth-yellow to-orange-500 text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <TreePine className="w-5 h-5" />
        <span>Schedule Tree Planting</span>
      </motion.button>
    </div>
  )
}

export default PlantTreeScreen