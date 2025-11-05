import { useRef, useEffect, useState } from 'react'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import React from 'react'

import { addMessage, readMessages } from '../utils'
import { Message } from './Message'
import { Button } from '@mui/material'
import { IoIosSend } from "react-icons/io";

// ...a meglévő kódodhoz add hozzá:

export const Chat = ({user}) => {
  const [messages, setMessages] = useState([])
  const inputRef = useRef()
  const bottomRef = useRef(null) // ⬅️ új ref a scrollozáshoz

  useEffect(() => {
    const unsubscribe = readMessages(setMessages)
    return unsubscribe
  }, [])

  // Görgetés az aljára, ha messages frissül
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' }) // ⬅️ smooth scroll
    }
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const text = inputRef.current.value
    console.log(text.length);
    if(text.length > 20) return
    if (!text.trim()) return // üres üzenet kiszűrése
    const message = {
      text,
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      timestamp: Date.now()
    }
    await addMessage(message)
    inputRef.current.value = '' // üzenet elküldése után ürítés
  }

  return (
    <div style={{ position: 'relative',height:'100vh',minHeight:'fit-content' ,display:'flex',flexDirection:'column',justifyContent:'flex-end',}}>
      {messages && messages.map(obj => (
        <Message key={obj.id} msg={obj} currentUser={user.uid} />
      ))}
      <div ref={bottomRef} /> {/* ⬅️ ide fog scrollozni */}
      <form className='alma' onSubmit={handleSubmit} >
        <input
          ref={inputRef}
          type="text"
          placeholder='Írj valamit...'
          style={{ flex: 1 }}
        />
        <Button type='submit' variant="contained" endIcon={<IoIosSend />}>
          Send
        </Button>
      </form>
    </div>
  )
}
