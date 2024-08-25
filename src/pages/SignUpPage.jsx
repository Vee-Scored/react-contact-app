import React, { useEffect } from 'react'
import SignUpForm from '../components/SignUpForm'
import { useNavigate } from 'react-router-dom'
import { useLoading } from '../store/UseLoadingStore';
import LoadingComponent from '../components/LoadingComponent';

const SignUpPage = () => {
  const nav = useNavigate();

  const exitToken = localStorage.getItem('token')
  const {isLoading} = useLoading()
  useEffect(()=>{
    if (exitToken) {
      nav("/indexPage")
    } 
  },[exitToken])
 
  return (
    <div>
      {isLoading && <LoadingComponent/>}
      <SignUpForm/>
    </div>
  )
}

export default SignUpPage