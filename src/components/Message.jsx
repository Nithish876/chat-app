import React, { useEffect, useState } from 'react'  
import { auth } from '../config/firebase'

function Message({message,username}) {
 const [me,setme] = useState('')

 useEffect(()=>{

    if(auth.currentUser.displayName === username){
        setme(' me')
     }
    
 },[])

  return (
    <div className={`message ${me}`}>
        <span>{username}</span>
        <h3>{message}</h3>
    </div>
  )
}

export default Message
