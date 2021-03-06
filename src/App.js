import React from 'react'
import Login from './components/Login'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
        <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signUp' element={<SignUp/>} />
    </Routes>
  </Router>
   
  )
}

export default App