import React from 'react'
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import '../App.css'

const App = () => {
  return (
    <div className={`container-app`}>
      <div data-testid="navbar" className={`nav-bar`}>
        <NavBar/>
      </div>
      <div data-testid="home" className={`content-area`}>
        <Home />
      </div>
    </div>
  )
}

export default App
