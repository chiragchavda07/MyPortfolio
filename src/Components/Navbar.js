import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Navbar.css"
// import ReorderIcon from "@mui/material"
function Navbar() {
  return (
    <div className="navbar">
        {/* <div className="toggleButton">
            <button>
                <ReorderIcon /> reorder icon to be insert
            </button>
        </div> */}
        <div className="links">
             <Link to="/">Home</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar