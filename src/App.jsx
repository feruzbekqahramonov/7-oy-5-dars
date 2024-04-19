import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Register from './components/Register'
import Home from './components/Home'
import { useEffect, useState } from 'react'


function App() {
  const navigate = useNavigate()
  const token = useSelector(state => state.token.value)
  const location = useLocation()
  useEffect(() => {
    if(!token && location.pathname != '/register') {
      navigate('/login')
    }
  },[navigate, token])

  function ProtectedRoute({children,  isAuthenticated, redirectTo = '/login'}) {
    if(!isAuthenticated) {
      navigate(redirectTo)
    }
    return children
  }

  return (
    <>
      <Routes>
        <Route path='/register' element = {<Login></Login>}></Route>
        <Route path='/login' element = {<Register></Register>}></Route>

        <Route path='/' element= {<ProtectedRoute isAuthenticated={token ? true : false}>
          <Home></Home>
        </ProtectedRoute>}></Route>
      </Routes>
    </>
  )
}

export default App
