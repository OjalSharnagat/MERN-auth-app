import { Link } from "react-router-dom"
import React, { useState } from "react";
export default function Navbar() {
  
   return (
    <nav className="navbar">
      <div className="logo">NotesApp</div>
      <div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div className="menu">
          <li>
            <Link to='/'>Home</Link>
          </li>
          </div>
        </ul>
      </div> 
    </nav>
    
  );
};


