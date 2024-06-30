import React from 'react'
import GrandChild from './GrandChild'

export default function Child({message}){
    return (
      <div>
          <h3>Child component</h3>
          <GrandChild message = {message}/>
      </div>
    )
  }