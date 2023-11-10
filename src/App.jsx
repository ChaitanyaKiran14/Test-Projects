import React, { useState } from 'react'
import Clock from './Components/Clock/Clock'

import './App.css'

function App() {
  const [showClock, setShowClock] = useState(false)

  const onToggleClock = () => {
    setShowClock((prevShowClock) => !prevShowClock)
  }

  return (
    <div className="app-container">
      <button onClick={onToggleClock} type="button" className="toggle-button">
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
      {showClock && <Clock />}
    </div>
  )
}

export default App
