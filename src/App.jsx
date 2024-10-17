import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ForgetPass from './Pages/ForgetPass'

const App = () => {
  return (
   
    <>
    <BrowserRouter>
    <Header/>
     <div className='h-screen'>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgetpass' element={<ForgetPass/>}/>
      </Routes>
     </div>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
