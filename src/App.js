import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import "./app.scss"
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import { userSingInByToken, userSingOut } from './reducer/authFeature/authSlices'
import Cookies from 'js-cookie'

const App = () => {
  // const navigate = useDispatch();
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && !user) {
      dispatch(userSingInByToken());
    }
    
  })

  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        {!user && <Route path='/login' element={<Login />} />}
        {!user && <Route path='/register' element={<Register />} />}
        {!user && <Route path='/forget' element={<ForgotPassword />} />}

        <Route path='*' element={<Navigate to="/" />} />c

      </Routes>
      <ToastContainer />
    </Router>
  )
}




export default App