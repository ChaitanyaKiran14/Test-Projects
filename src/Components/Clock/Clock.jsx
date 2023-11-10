import React, { useState, useEffect } from 'react'


function Clock() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [])

  return (
    <div className="clock-container">
      <h1 className="heading">Clock</h1>
      <p className="time">{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Clock
