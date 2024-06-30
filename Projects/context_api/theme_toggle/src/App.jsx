import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header';
import Content from './components/Content';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
     </ThemeProvider>
    </>
  )
}

export default App
