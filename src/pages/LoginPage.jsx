import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { useLoading } from '../store/UseLoadingStore'
import LoadingComponent from '../components/LoadingComponent';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/UseAuthStore';
import { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const {isLoading} = useLoading();
  const nav = useNavigate();
  
  const exitToken = localStorage.getItem('token')
  
  useEffect(()=>{
    if (exitToken) {
      nav("/indexPage")
    }
  },[exitToken])
  return (
    <div>
      {isLoading && <LoadingComponent/>}
      
      <LoginForm/>
    </div>
  )
}

export default LoginPage