import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { useEffect } from 'react'
import { auth } from '../firebaseApp'
import { Signin } from './components/Signin'
import { signOut } from 'firebase/auth'

function App() {
  const [user,setUser] = useState(null)

  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged(setUser)
    return unSubscribe
  },[])

  user && console.log(user);
  
  return (
   
    <div>
      <h1>Realchat</h1>
      {user ?
      <>
      <div className='user-info'>
        <img src={user.photoURL} alt="fotó" />
        <span>{user.displayName}</span>
        <button onClick={()=>signOut(auth)}>Kijelentkezés</button>
      </div>
      <Chat user={user}/>
      </>
      : <Signin/>
    }
      
    
    
    </div>
  );
}

export default App
