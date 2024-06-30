import React from 'react'
import Child from './Child'
import GrandChild from './GrandChild';

export default function Parent({message}){
    const msg1 = message.msg1;
  return (
    <div>
        <h2>Parent component</h2>
        <Child message = {msg1}/>
    </div>
  )
}