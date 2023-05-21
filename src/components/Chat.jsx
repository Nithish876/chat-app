import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../config/firebase'
import Message from './Message'

function Chat({room,setroom}) {
    const [newMessage,setnewMessage] = useState('')
    const [messages,setmessages] = useState([])
    const msgref = collection(db,'messages')
    
    const leaveroom = ()=>{
        console.log('working');
        setroom(null)
    } 
     useEffect(()=>{
        console.log('working');
        const quermsg = query(msgref,where("room","==",room),orderBy('createdAt'));
      const unsuscribe = onSnapshot(quermsg,(snapshot)=>{
        let msgs = [];
       snapshot.forEach((doc)=>{ 
        console.log({...doc.data(),id:doc.id});
            msgs.push({...doc.data(),id:doc.id}); 
      }) 
      setmessages(msgs) 
      })
      return ()=> unsuscribe();
     },[])

    const sendmsg =async (e)=>{
e.preventDefault();
if(newMessage === '') return
 
 await addDoc(msgref,{message:newMessage,createdAt:serverTimestamp(),
user:auth.currentUser.displayName,
room
})
 setnewMessage('')
console.log({room,newMessage});
    }
     
  return (
    <div className="chat-page"> 
   
    <div className='chat-box'>
    <div className="chat-header"> 
    Welcome To:
        <h3>{room}</h3> 
    </div>
    <div className="message-box">
 {
    messages.map((msg)=>{
        return <Message key={msg.id} message={msg.message} username={msg.user} />
    })
     }
   </div>
      <form  onSubmit={sendmsg}>
        <input onChange={(e)=>setnewMessage(e.target.value)} value={newMessage} type="text" placeholder='Type your message here..'/>
        <button type='submit' className='send-btn'>send</button>
      </form>
    </div>
    <button className='l-btn' onClick={leaveroom}>Leave Room</button>
    </div>
  )
}

export default Chat
