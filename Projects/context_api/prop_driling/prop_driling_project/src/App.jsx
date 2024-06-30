import { useState } from 'react'
import './App.css'
import Parent from './components/Parent';

function App() {
  const msg ={
    msg1: 'Message 1',
    msg2: 'Message2'
  };
  
  return (
    <>
      <h1>Prop Driling Example</h1>
      <Parent message = {msg}/>
    </>
  )
}

export default App
