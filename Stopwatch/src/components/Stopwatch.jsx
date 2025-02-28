import { useState, useEffect } from 'react'

const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setTime(0)} disabled={isRunning}>
        Reset
      </button>
    </div>
  )
}

export default Stopwatch
