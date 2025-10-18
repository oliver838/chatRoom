import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { addMessage } from '../utils'

export const Chat = ({user}) => {
    const [messages, setMessages] = useState([])
    const inputRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const text = inputRef.current.value
        console.log(text);
        const message = {
            text,
            uid:user.uid,
            photoURL:user.photoURL,
            displayName:user.displayName,
            timestamp:Date.now()
        }
        await addMessage(message)
    }
  return (
    <div>
      default Chatroom
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder='Írj valmait...' />
        <button type='submit'>Küldés</button>
      </form>
    </div>
  )
}
