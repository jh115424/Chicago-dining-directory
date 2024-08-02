// import React from'react'
import "./Navbar.css";
import React from "react";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
     
      <div className="main-container">
        <div className="title-container">
          <h1 className="directory-name">LuxeVue Chicago Dining</h1>

          <img
            src="https://i.pinimg.com/originals/21/6e/41/216e415824c35e1c7eab0a9a2485604b.jpg"
            className="header-logo"
          ></img>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/home">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/seafood">
                <h3>Seafood</h3>
              </Link>
            </li>
            <li>
              <Link to="/carnivore">
                <h3>Carnivore</h3>
              </Link>
            </li>
            <li>
              <Link to="/vegan">
                <h3>Vegan</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h3>About</h3>
              </Link>
            </li>
            
           
          </ul>
        </div>
      </div>
    </nav>
  );
};
