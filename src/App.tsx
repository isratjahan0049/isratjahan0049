import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomeScreen from './screens/HomeScreen'
import ReportPollutionScreen from './screens/ReportPollutionScreen'
import LeaderboardScreen from './screens/LeaderboardScreen'
import GreenMapScreen from './screens/GreenMapScreen'
import LearningScreen from './screens/LearningScreen'
import ProfileScreen from './screens/ProfileScreen'
import PlantTreeScreen from './screens/PlantTreeScreen'
import VoteActionScreen from './screens/VoteActionScreen'
import PitchDeck from './components/PitchDeck'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pitch" element={<PitchDeck />} />
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/report" element={<ReportPollutionScreen />} />
              <Route path="/plant" element={<PlantTreeScreen />} />
              <Route path="/learn" element={<LearningScreen />} />
              <Route path="/vote" element={<VoteActionScreen />} />
              <Route path="/leaderboard" element={<LeaderboardScreen />} />
              <Route path="/map" element={<GreenMapScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App