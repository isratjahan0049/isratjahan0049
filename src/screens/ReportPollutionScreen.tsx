import React, { useState } from 'react'
import { Camera, MapPin, Send, Wifi, WifiOff } from 'lucide-react'
import { motion } from 'framer-motion'

const ReportPollutionScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [description, setDescription] = useState('')
  const [isOffline] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)

  const categories = [
    { id: 'plastic', name: 'Plastic Waste', emoji: '🗑️', color: 'from-red-400 to-red-600' },
    { id: 'smoke', name: 'Air Pollution', emoji: '💨', color: 'from-gray-400 to-gray-600' },
    { id: 'water', name: 'Water Pollution', emoji: '💧', color: 'from-blue-400 to-blue-600' },
    { id: 'noise', name: 'Noise Pollution', emoji: '🔊', color: 'from-purple-400 to-purple-600' },
  ]

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPhoto(e.target?.result as string)
        // Simulate AI detection
        setTimeout(() => {
          setSelectedCategory('plastic')
        }, 1000)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = () => {
    if (isOffline) {
      alert('Report queued for when you\'re back online!')
    } else {
      alert('Report submitted successfully!')
    }
  }

  return (
    <div className="px-4 space-y-6">
      {/* Offline Indicator */}
      {isOffline && (
        <motion.div 
          className="bg-orange-100 border border-orange-300 rounded-lg p-3 flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <WifiOff className="w-5 h-5 text-orange-600" />
          <span className="text-orange-800 text-sm">Offline mode - reports will be queued</span>
        </motion.div>
      )}

      {/* Photo Upload */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Take a Photo</h3>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoUpload}
            className="hidden"
            id="photo-upload"
          />
          <label
            htmlFor="photo-upload"
            className="block w-full h-48 border-2 border-dashed border-sage-green rounded-xl cursor-pointer hover:border-mint-green transition-colors"
          >
            {photo ? (
              <img src={photo} alt="Pollution report" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-sage-green">
                <Camera className="w-12 h-12 mb-2" />
                <span className="text-sm font-medium">Tap to take photo</span>
              </div>
            )}
          </label>
        </div>
      </motion.div>

      {/* AI Category Detection */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Pollution Type</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedCategory === category.id
                  ? 'border-mint-green bg-mint-green/10'
                  : 'border-gray-200 hover:border-sage-green'
              }`}
            >
              <div className="text-2xl mb-2">{category.emoji}</div>
              <div className="text-sm font-medium text-forest-green">{category.name}</div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Location */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-mint-green" />
          <div>
            <h4 className="font-semibold text-forest-green">Current Location</h4>
            <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div 
        className="bg-white rounded-2xl p-6 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold text-forest-green mb-4">Description</h3>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe what you see..."
          className="w-full h-24 p-3 border border-sage-green/30 rounded-xl resize-none focus:outline-none focus:border-mint-green"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-mint-green to-forest-green text-white py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 card-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isOffline ? <WifiOff className="w-5 h-5" /> : <Send className="w-5 h-5" />}
        <span>{isOffline ? 'Queue Report' : 'Submit Report'}</span>
      </motion.button>
    </div>
  )
}

export default ReportPollutionScreen