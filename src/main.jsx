import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import IndexPage from './pages/IndexPage.jsx'
import ContactCreatePage from './pages/ContactCreatePage.jsx'
import ContactEditPage from './pages/ContactEditPage.jsx'
import SignUpSuccess from './pages/SignUpSuccess.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signUp' element={<SignUpPage />} />
            <Route path='/signUpSuccess' element={<SignUpSuccess />} />
            <Route path='/indexPage' element={<IndexPage/>} />
            <Route path='/contactCreate' element={<ContactCreatePage/>} />
            <Route path="/contactEdit/:contactId" element={<ContactEditPage/>} />
        </Routes>
    </Router>
)
