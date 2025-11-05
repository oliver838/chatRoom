import React from 'react'

export const Message = ({msg,currentUser}) => {
  const isOwn=msg.uid==currentUser
  return (
    <div className={`message ${isOwn ? "own" : ""}`}>
      <img src={msg.photoURL} alt={msg.displayName} />
      <div>
        <strong>{msg.displayName}</strong>
        <p>{msg.text}</p>
      </div>
    </div>
  )
}
