import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Analytics from './compenents/Analytics'
import Hero from './compenents/Hero'
import Navbar from './compenents/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
    </div>
  )
}

export default App
