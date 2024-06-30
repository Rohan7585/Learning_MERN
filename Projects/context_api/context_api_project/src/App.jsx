import { useState } from 'react'
import './App.css'
import { messageContext } from './contexts/MessageContext';
import Parent from './components/Parent';
function App() {
  const message = "New message from app";
  return (
    <>
      <messageContext.Provider value={message}>
      <div>
        <h1>This is app component</h1>
        <Parent/>
      </div>
      </messageContext.Provider>
    </>
  )
}

export default App
