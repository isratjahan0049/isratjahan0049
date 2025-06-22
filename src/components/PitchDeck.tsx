import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Leaf, Users, Target, Globe, TrendingUp, Heart, Phone, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      type: 'cover',
      title: 'OxyBee',
      subtitle: 'Breathe Green, Act Clean',
      content: 'Empowering Bangladesh\'s Youth to Combat Climate Change',
      background: 'from-forest-green to-mint-green'
    },
    {
      id: 2,
      type: 'problem',
      title: 'The Climate Crisis in Bangladesh',
      points: [
        'Air pollution causes 123,000+ deaths annually',
        'Rising temperatures: 45°C+ heatwaves',
        'Deforestation: 2.6 million hectares lost',
        'Youth feel powerless to create change'
      ],
      stats: { deaths: '123K+', temp: '45°C+', forest: '2.6M ha' },
      background: 'from-red-400 to-red-600'
    },
    {
      id: 3,
      type: 'solution',
      title: 'OxyBee: Your Climate Action Companion',
      subtitle: 'A mobile platform that transforms every citizen into an environmental guardian',
      features: [
        'Report pollution instantly with AI detection',
        'Plant trees and track environmental impact',
        'Learn climate science in Bengali',
        'Vote on community priorities'
      ],
      background: 'from-mint-green to-forest-green'
    },
    {
      id: 4,
      type: 'sdg',
      title: 'Aligned with UN Sustainable Development Goals',
      goals: [
        { number: 11, title: 'Sustainable Cities', icon: '🏙️', description: 'Making cities inclusive, safe, resilient' },
        { number: 13, title: 'Climate Action', icon: '🌡️', description: 'Urgent action to combat climate change' },
        { number: 15, title: 'Life on Land', icon: '🌳', description: 'Protect, restore terrestrial ecosystems' }
      ],
      background: 'from-blue-400 to-blue-600'
    },
    {
      id: 5,
      type: 'features',
      title: 'Core Features',
      features: [
        { name: 'Pollution Reporting', icon: '📱', description: 'AI-powered detection & offline support' },
        { name: 'Tree Challenge', icon: '🌱', description: 'Gamified tree planting campaigns' },
        { name: 'Green Map', icon: '🗺️', description: 'Real-time environmental data visualization' },
        { name: 'Learning Hub', icon: '📚', description: 'Climate education in Bengali' },
        { name: 'Community Voting', icon: '🗳️', description: 'Democratic environmental decision-making' }
      ],
      background: 'from-mint-green to-sage-green'
    },
    {
      id: 6,
      type: 'audience',
      title: 'Target Audience',
      segments: [
        { name: 'Students', size: '45M', icon: '🎓', description: 'Ages 13-25, tech-savvy, environmentally conscious' },
        { name: 'Schools', size: '130K', icon: '🏫', description: 'Educational institutions seeking engagement tools' },
        { name: 'NGOs', size: '2.2K', icon: '🤝', description: 'Environmental organizations needing data' },
        { name: 'Communities', size: '87K', icon: '🏘️', description: 'Local groups driving change' }
      ],
      background: 'from-earth-yellow to-orange-500'
    },
    {
      id: 7,
      type: 'market',
      title: 'Market Potential in Bangladesh',
      stats: [
        { label: 'Mobile Users', value: '104M', growth: '+8% annually' },
        { label: 'Internet Users', value: '75M', growth: '+12% annually' },
        { label: 'Environmental Spending', value: '$2.1B', growth: 'Government allocation' },
        { label: 'Youth Population', value: '48M', growth: '29% of total population' }
      ],
      background: 'from-purple-400 to-purple-600'
    },
    {
      id: 8,
      type: 'revenue',
      title: 'Revenue Model & Partnerships',
      streams: [
        { type: 'Premium Features', description: 'Advanced analytics for organizations', revenue: '40%' },
        { type: 'bdapps Integration', description: 'SMS-based reporting for rural users', revenue: '25%' },
        { type: 'NGO Partnerships', description: 'Data insights and campaign tools', revenue: '20%' },
        { type: 'Corporate Sponsorship', description: 'Brand partnerships for tree planting', revenue: '15%' }
      ],
      background: 'from-green-400 to-green-600'
    },
    {
      id: 9,
      type: 'impact',
      title: 'Projected Environmental Impact',
      projections: [
        { metric: 'Trees Planted', year1: '50K', year3: '500K', icon: '🌳' },
        { metric: 'Pollution Reports', year1: '100K', year3: '1M', icon: '📊' },
        { metric: 'CO₂ Reduced', year1: '1.2K tons', year3: '15K tons', icon: '🌍' },
        { metric: 'Users Educated', year1: '250K', year3: '2.5M', icon: '🎓' }
      ],
      background: 'from-teal-400 to-teal-600'
    },
    {
      id: 10,
      type: 'cta',
      title: 'Join the Movement',
      subtitle: 'Together, we can make Bangladesh greener',
      actions: [
        'Download OxyBee today',
        'Partner with us for impact',
        'Invest in our green future'
      ],
      contact: 'hello@oxybee.app',
      background: 'from-mint-green via-forest-green to-dark-green'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const renderSlide = (slide: any) => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className="text-center text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
            >
              <Leaf className="w-16 h-16" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl font-bold mb-4"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl mb-8 opacity-90"
            >
              {slide.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg opacity-80"
            >
              {slide.content}
            </motion.p>
          </div>
        )

      case 'problem':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold mb-8"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {Object.entries(slide.stats).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-center p-6 bg-white/20 rounded-2xl"
                >
                  <div className="text-3xl font-bold mb-2">{value}</div>
                  <div className="text-sm opacity-90 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-4">
              {slide.points.map((point: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'solution':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.features.map((feature: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-6 bg-white/20 rounded-2xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-lg">{feature}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'sdg':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {slide.goals.map((goal: any, index: number) => (
                <motion.div
                  key={goal.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                  className="text-center p-6 bg-white/20 rounded-2xl"
                >
                  <div className="text-4xl mb-4">{goal.icon}</div>
                  <div className="text-2xl font-bold mb-2">SDG {goal.number}</div>
                  <div className="text-lg font-semibold mb-2">{goal.title}</div>
                  <div className="text-sm opacity-90">{goal.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'features':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slide.features.map((feature: any, index: number) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-white/20 rounded-2xl text-center"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <div className="text-lg font-semibold mb-2">{feature.name}</div>
                  <div className="text-sm opacity-90">{feature.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'audience':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.segments.map((segment: any, index: number) => (
                <motion.div
                  key={segment.name}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-white/20 rounded-2xl"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl">{segment.icon}</div>
                    <div>
                      <div className="text-xl font-bold">{segment.name}</div>
                      <div className="text-lg opacity-90">{segment.size}</div>
                    </div>
                  </div>
                  <div className="text-sm opacity-80">{segment.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'market':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.stats.map((stat: any, index: number) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-white/20 rounded-2xl text-center"
                >
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold mb-2">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.growth}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'revenue':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="space-y-6">
              {slide.streams.map((stream: any, index: number) => (
                <motion.div
                  key={stream.type}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-white/20 rounded-2xl"
                >
                  <div className="flex-1">
                    <div className="text-xl font-bold mb-2">{stream.type}</div>
                    <div className="text-sm opacity-90">{stream.description}</div>
                  </div>
                  <div className="text-2xl font-bold ml-6">{stream.revenue}</div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'impact':
        return (
          <div className="text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-8 text-center"
            >
              {slide.title}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slide.projections.map((proj: any, index: number) => (
                <motion.div
                  key={proj.metric}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-6 bg-white/20 rounded-2xl text-center"
                >
                  <div className="text-4xl mb-4">{proj.icon}</div>
                  <div className="text-lg font-semibold mb-4">{proj.metric}</div>
                  <div className="flex justify-between">
                    <div>
                      <div className="text-2xl font-bold">{proj.year1}</div>
                      <div className="text-sm opacity-90">Year 1</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{proj.year3}</div>
                      <div className="text-sm opacity-90">Year 3</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )

      case 'cta':
        return (
          <div className="text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl mb-8 opacity-90"
            >
              {slide.subtitle}
            </motion.p>
            <div className="space-y-4 mb-8">
              {slide.actions.map((action: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center space-x-3 text-xl"
                >
                  <ArrowRight className="w-6 h-6" />
                  <span>{action}</span>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl font-semibold"
            >
              {slide.contact}
            </motion.div>
          </div>
        )

      default:
        return <div>Slide content</div>
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Slide Container */}
      <div className={`min-h-screen bg-gradient-to-br ${slides[currentSlide].background} flex items-center justify-center p-8`}>
        <div className="max-w-6xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {renderSlide(slides[currentSlide])}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-full px-6 py-3">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed top-8 right-8 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  )
}

export default PitchDeck