import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './store/UseAuthStore'

function App() {
  const nav = useNavigate();
  const exitItem = localStorage.getItem('token')
  
  useEffect(()=>{
    if (exitItem) {
      nav("/indexPage")
      
    } else {
      nav ("/signUp")
    }
  },[])

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default App
