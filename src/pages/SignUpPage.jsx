import React, { useEffect } from 'react'
import SignUpForm from '../components/SignUpForm'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const nav = useNavigate();

  const exitToken = localStorage.getItem('token')
  
  useEffect(()=>{
    if (exitToken) {
      nav("/indexPage")
    } 
  },[exitToken])
 
  return (
    <div>
      <SignUpForm/>
    </div>
  )
}

export default SignUpPage