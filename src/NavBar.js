import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="nav-div">
        <nav className="nav">
            <Link to="/">Vending Machine</Link>
            <Link to="/popcorn">Popcorn</Link>
            <Link to="/gatorade">Gatorade</Link>
            <Link to="/doublebubble">DoubleBubble</Link>
        </nav>
        </div>
    )
}

export default NavBar