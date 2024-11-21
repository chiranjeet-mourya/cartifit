import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Services from './pages/Services/Services'
import Login from './pages/form/Login'
import Singup from './pages/form/Singup'
import About from './pages/About/About'
import Privacy from './pages/Privacy/Privacy'
import Condition from './pages/condition/Condition'


function App() {

  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/singup';
  
  return (
    <>
     
     {!isAuthPage && <Header />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/condition' element={<Condition/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singup' element={<Singup/>}/>
    </Routes>
    {!isAuthPage && <Footer />}
    </>
  )
}

export default App