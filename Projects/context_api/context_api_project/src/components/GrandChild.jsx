import React,{useContext} from 'react'
import { messageContext } from '../contexts/MessageContext'

export default function GrandChild() {
    const msg = useContext(messageContext);
  return (
    <div>
        <h4>GrandChild</h4>
        <p>{msg}</p>
    </div>
  )
}
