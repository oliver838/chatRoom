import React from 'react'
import { auth, provider } from '../../firebaseApp'
import { signInWithPopup } from 'firebase/auth'

export const Signin = () => {

    const handleSignin = async () => {
        await signInWithPopup(auth,provider)
    }
  return (
    <div className='signin'>
      <p>Jelentkezz be</p>
      <button onClick={handleSignin}>Bejelentkezés googleba</button>
    </div>
  )
}
