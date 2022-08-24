import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Analytics from './compenents/Analytics'
import Hero from './compenents/Hero'
import Navbar from './compenents/Navbar'
import Newsletter from './compenents/Newsletter'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  )
}

export default App
