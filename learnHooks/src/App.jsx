import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-600 p-4 w-full h-screen flex flex-col items-center justify-center gap-4 text-white">
      <h1 className="text-5xl">Counter</h1>
      <p className="text-3xl">{count}</p>
      <button
        className="border-2 p-4 w-[200px] cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="border-2 p-4 w-[200px] cursor-pointer"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="border-2 p-4 w-[200px] cursor-pointer"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  )
}

export default App
