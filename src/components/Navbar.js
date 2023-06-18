import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
<nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">TextUtils</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>


          </ul>
          {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form> */}
          <div className="btn-group mx-2 btn-lg" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger btn-lg" onClick={props.handleDanger}></button>
            <button type="button" className="btn btn-warning btn-lg" onClick={props.handleWarning}></button>
            <button type="button" className="btn btn-success btn-lg" onClick={props.handleSuccess}></button>
          </div>

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
            Enable{props.mode === 'light' ? ' Dark' : ' Light'} Mode
          </div>
        </div>
      </div>
    </nav>

    )
}
