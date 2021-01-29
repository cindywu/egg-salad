import React, { useState, useContext, CSSProperties } from 'react'
import { ThemeContext } from './App'

interface CounterHooksProps {
  initialCount: number
}

export default function CounterHooks({ initialCount }: CounterHooksProps) {
  const [count, setCount] = useState(initialCount)
  const theme = useContext(ThemeContext)
  
  const color = theme?.theme

  const style: CSSProperties = {
    backgroundColor: color,
  }
  
  return (
    <div>
      <button style={style} onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}
