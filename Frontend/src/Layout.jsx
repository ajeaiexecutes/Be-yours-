import React from 'react'
import Navbar from './components/UserInterface/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/UserInterface/Footer'


const Layout = () => {
    
  return (
    <div className="min-h-screen flex flex-col">
          <Navbar />
            <main className="flex-1">
                <Outlet />
              </main>
          <Footer/>
        
          
    </div>
  )
}

export default Layout
