import React, { useState } from 'react'
import Auth from './components/Auth'
import Cookies from 'universal-cookie'
import Chat from './components/Chat'
import Jroom from './components/Jroom'
const cookies = new Cookies()
function App() { 
  const [isAuth,setisAuth] = useState(cookies.get('auth-token'))
  const [room,setroom] = useState(''  )
  if(!isAuth){
    return (
      <div>
        <Auth setisAuth={setisAuth} />
      </div>
    )
  }
 
  return <div>
    { room ?<Chat room={room} setroom={setroom} />:<Jroom room={room} setisAuth={setisAuth} setroom={setroom}/>}
  </div>
}

export default App

