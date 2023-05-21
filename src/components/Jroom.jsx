import React, { useState ,useRef} from 'react'
import {signOut} from 'firebase/auth'
import { auth, db } from '../config/firebase' 
import Cookies from 'universal-cookie'
function Jroom({setroom,room,setisAuth}) {
   const cookie = new Cookies()
    const roominpref = useRef(null)
    const logout=async ()=>{
      await signOut(auth)
      setisAuth(false) 
    }
    const joinroom =  ()=>{
      console.log(roominpref.current.value);
      setroom(roominpref.current.value) 
      
    }
  return (
    <div className='join-page'>
        <div className="join-box">

        <h1>Join a Room</h1>
      <input   placeholder='join a room...' ref={roominpref} type="text" name="room" id="" />
      <div className="btn-group">
      <button onClick={joinroom}>Join A room</button>
       <button  className='danger' onClick={logout}>Log out</button>
      </div>
       
        </div>
    </div>
  )
}

export default Jroom
