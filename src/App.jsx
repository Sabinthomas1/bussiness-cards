import React from 'react'
import Nav from './components/Navbar/Nav'
import './App.css'
import Home from './components/HomePage/Home'

const App = () => {
  return (
    <div className='App-container'>
      <Nav/>
      <Home/>
    </div>
  )
}

export default App