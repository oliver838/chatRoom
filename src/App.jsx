import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import { useEffect } from 'react'
import { auth } from '../firebaseApp'
import { Signin } from './components/Signin'
import { signOut } from 'firebase/auth'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";




function App() {
  const [user,setUser] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged(setUser)
    return unSubscribe
  },[])

   const toggleMenu = () => setMenuOpen(prev => !prev)
  user && console.log(user);
  
return (
    <div className="app">
      <h1>Realchat</h1>
      
      {user ? (
        <>
          {/* Hamburger gomb */}
          {!menuOpen&&<button
            className={`hamburger`}
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </button>}

          {/* Slide-in menü Framer Motion-nel */}
          <motion.div
            className="side-menu"
            initial={{ x: -250 }}
            animate={{ x: menuOpen ? 0 : -250 }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            {/* Menü tartalom */}
          
            <div className="menu-content" >
              <button className="close-btn" onClick={toggleMenu}>
                <IoCloseOutline />

              </button>
             <img  src={user.photoURL} alt="fotó" />
              <span>{user.displayName}</span>
           
                  </div>
                    <Button className='logOut'  onClick={() => signOut(auth)}>Kijelentkezés</Button>
        
          </motion.div>

          {/* Chat */}
          <Chat user={user} />
        </>
      ) : (
        <div className='signin-container'>
        <Signin />
        </div>
      )}
    </div>
  );
}

export default App
