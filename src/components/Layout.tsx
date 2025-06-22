import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import BottomNavigation from './BottomNavigation'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-sage-green">
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        <Header />
        <main className={`${isHome ? 'pt-20' : 'pt-16'} pb-20`}>
          {children}
        </main>
        <BottomNavigation />
      </div>
    </div>
  )
}

export default Layout