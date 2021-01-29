import React, { useState, useEffect, createContext, useContext } from 'react'
import CounterHooks from './CounterHooks'

const defaultTheme = 'red'

type ThemeContextType = {
  theme: string
  setTheme: (value: string) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    setTheme(defaultTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

const Toggle = () => {
  const { theme, setTheme } = useTheme ()!
  console.log('toggle theme', theme)
  return (
    <button onClick={() => setTheme(theme === 'red' ? 'blue' : 'red')}>
      Toggle Theme
    </button> 
  )
}

function App() {
  return (
    <ThemeProvider>
      CounterHooks
      <CounterHooks initialCount={0} />
      <Toggle />
    </ThemeProvider>
  )
}

export default App;
