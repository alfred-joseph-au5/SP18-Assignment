import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <nav data-testid="nav-tag" className="navbar navbar-expand-lg navbar-light" style={{flexGrow:1}}>
      <a className="navbar-brand" href="/"><span className="nav-logo">LOGO</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`filler`}/>
      <div className="" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">My Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Clients</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-dark my-2 my-sm-0">Get in Touch</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
