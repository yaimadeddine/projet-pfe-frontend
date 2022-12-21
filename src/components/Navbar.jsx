import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();



  const logout = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/logout')
    .then(res => {
      console.log(res.data);
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_role');
      navigate('/login');
    })
  }


  return (
    <div>
      <nav className="main-header navbar navbar-expand noir ">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href=""
              role="button"
            >
              <i className="fas fa-bars text-light" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block textblanc">
            <a href="/" className="nav-link text-light">
              Home
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link text-light"
              data-widget="fullscreen"
              
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-light"
              role="button"
              onClick={logout}
            >
              <i className="fa-solid fa-right-from-bracket" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
