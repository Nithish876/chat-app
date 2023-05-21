import React from 'react'
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies()
function Auth({setisAuth}) {
    const googlesignin=async()=>{
      try {
        const result =   await   signInWithPopup(auth,provider) 
        cookies.set("auth-token",result.user.refreshToken)
        setisAuth(true)
      } catch (error) {
        console.log(error);
      }

    }
  return (
    <div className='auth'>
      <h2>Welcome To NitChat</h2>
      <div className="auth-box">
      <h5>Sign In with Gogle to continue...</h5>
      <button onClick={googlesignin}><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" className='btn-logo' /> Google </button>
      </div>
     
    </div>
  )
}

export default Auth
