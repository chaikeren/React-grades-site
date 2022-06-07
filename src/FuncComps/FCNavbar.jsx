import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../photos/excel icon.png'

export default function FCNavbar() {

  const user = JSON.parse(localStorage.getItem('user'));
  let loggedIn = user != null && user.length > 1 ? true : false;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bgNavbar">
        <div className="container-fluid">
        <img src={logo} alt="" style={{width:"50px", height:"50px"}}/>
          <a className="navbar-brand" href="#">Grades Web</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/Privacy">Privacy</Link>
              <Link className="nav-link" to="/ToStudy">ToStudy</Link>
              {loggedIn
               ? <Link className="nav-link" to="/UserInfo">UserInfo</Link>
               : <Link className="nav-link" to="/Login">Login</Link>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
