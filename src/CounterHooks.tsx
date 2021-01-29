import React, { useState } from 'react'

interface CounterHooksProps {
  initialCount: number
}

export default function CounterHooks({ initialCount }: CounterHooksProps) {
  const [count, setCount] = useState(initialCount)
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}
