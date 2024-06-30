import { useState } from 'react'
import './App.css'
import UserDisplay from './components/UserDisplay'
import { UserProvider } from './context/UserContext'
function App() {

  return (
    <>
      <UserProvider>
        <div>
          <h1>Simple Context API example</h1>
          <UserDisplay />
        </div>
      </UserProvider>
    </>
  )
}

export default App
