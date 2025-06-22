import React, { useState } from 'react'
import { MapPin, TreePine, AlertTriangle, Filter, Navigation } from 'lucide-react'
import { motion } from 'framer-motion'

const GreenMapScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedMarker, setSelectedMarker] = useState<any>(null)

  const filters = [
    { id: 'all', name: 'All', icon: MapPin, color: 'text-forest-green' },
    { id: 'trees', name: 'Trees', icon: TreePine, color: 'text-mint-green' },
    { id: 'pollution', name: 'Pollution', icon: AlertTriangle, color: 'text-red-500' },
  ]

  const mapMarkers = [
    {
      id: 1,
      type: 'tree',
      title: 'Mango Tree Planted',
      location: 'Ramna Park',
      date: '2 days ago',
      user: 'Fatima Rahman',
      coordinates: { lat: 23.7465, lng: 90.3915 },
      details: 'Young mango tree planted as part of community initiative'
    },
    {
      id: 2,
      type: 'pollution',
      title: 'Plastic Waste Reported',
      location: 'Dhanmondi Lake',
      date: '1 hour ago',
      user: 'Ahmed Hassan',
      coordinates: { lat: 23.7461, lng: 90.3742 },
      details: 'Large amount of plastic bottles found near lake shore'
    },
    {
      id: 3,
      type: 'tree',
      title: 'Neem Tree Planted',
      location: 'Gulshan Park',
      date: '1 week ago',
      user: 'Rashida Begum',
      coordinates: { lat: 23.7806, lng: 90.4193 },
      details: 'Medicinal neem tree planted for air purification'
    },
    {
      id: 4,
      type: 'pollution',
      title: 'Air Pollution Alert',
      location: 'Tejgaon Industrial',
      date: '3 hours ago',
      user: 'Karim Uddin',
      coordinates: { lat: 23.7644, lng: 90.3937 },
      details: 'Heavy smoke emission from factory chimney'
    },
  ]

  const filteredMarkers = selectedFilter === 'all' 
    ? mapMarkers 
    : mapMarkers.filter(marker => 
        selectedFilter === 'trees' ? marker.type === 'tree' : marker.type === 'pollution'
      )

  const getMarkerColor = (type: string) => {
    return type === 'tree' ? 'from-mint-green to-forest-green' : 'from-red-400 to-red-600'
  }

  const getMarkerIcon = (type: string) => {
    return type === 'tree' ? TreePine : AlertTriangle
  }

  return (
    <div className="px-4 space-y-6">
      {/* Map Controls */}
      <motion.div 
        className="bg-white rounded-2xl p-4 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-forest-green">Green Map</h3>
          <button className="p-2 bg-mint-green/20 rounded-full">
            <Navigation className="w-5 h-5 text-forest-green" />
          </button>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all ${
                selectedFilter === filter.id
                  ? 'border-mint-green bg-mint-green text-white'
                  : 'border-sage-green text-forest-green hover:border-mint-green'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{filter.name}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative h-64 bg-gradient-to-br from-sage-green/20 to-mint-green/20 rounded-xl overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                {/* Simplified map paths */}
                <path d="M50 50 Q100 30 150 50 T250 70 Q300 80 350 60" stroke="#7FB069" strokeWidth="3" fill="none" />
                <path d="M30 100 Q80 120 130 100 T230 110 Q280 120 330 100" stroke="#7FB069" strokeWidth="2" fill="none" />
                <circle cx="100" cy="80" r="15" fill="#A8DADC" opacity="0.6" />
                <circle cx="200" cy="120" r="20" fill="#A8DADC" opacity="0.6" />
                <circle cx="300" cy="90" r="12" fill="#A8DADC" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Map Markers */}
          {filteredMarkers.map((marker, index) => {
            const Icon = getMarkerIcon(marker.type)
            return (
              <motion.button
                key={marker.id}
                onClick={() => setSelectedMarker(marker)}
                className={`absolute w-10 h-10 bg-gradient-to-br ${getMarkerColor(marker.type)} rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform`}
                style={{
                  left: `${20 + index * 20}%`,
                  top: `${30 + (index % 2) * 30}%`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-5 h-5" />
              </motion.button>
            )
          })}

          {/* Current Location */}
          <motion.div
            className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-lg"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>
          </motion.div>
        </div>

        {/* Map Legend */}
        <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-mint-green to-forest-green rounded-full"></div>
            <span className="text-gray-600">Trees Planted</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
            <span className="text-gray-600">Pollution Reports</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Your Location</span>
          </div>
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {filteredMarkers.slice(0, 3).map((marker, index) => {
            const Icon = getMarkerIcon(marker.type)
            return (
              <motion.div
                key={marker.id}
                className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                onClick={() => setSelectedMarker(marker)}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${getMarkerColor(marker.type)} rounded-full flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-forest-green">{marker.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-3 h-3" />
                    <span>{marker.location}</span>
                    <span>•</span>
                    <span>{marker.date}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div 
        className="bg-gradient-to-r from-mint-green to-forest-green rounded-2xl p-6 text-white card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-lg font-semibold mb-4">Map Statistics</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <TreePine className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">247</p>
            <p className="text-sm opacity-90">Trees Mapped</p>
          </div>
          <div className="text-center">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold">89</p>
            <p className="text-sm opacity-90">Reports Filed</p>
          </div>
        </div>
      </motion.div>

      {/* Selected Marker Details Modal */}
      {selectedMarker && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-end justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedMarker(null)}
        >
          <motion.div
            className="bg-white rounded-t-2xl p-6 w-full max-w-md"
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${getMarkerColor(selectedMarker.type)} rounded-full flex items-center justify-center`}>
                {React.createElement(getMarkerIcon(selectedMarker.type), { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-forest-green">{selectedMarker.title}</h3>
                <p className="text-sm text-gray-600">by {selectedMarker.user}</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                {selectedMarker.location}
              </div>
              <p className="text-sm text-gray-600">{selectedMarker.date}</p>
              <p className="text-sm text-forest-green">{selectedMarker.details}</p>
            </div>
            <button
              onClick={() => setSelectedMarker(null)}
              className="w-full bg-mint-green text-white py-3 rounded-xl font-semibold"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default GreenMapScreen