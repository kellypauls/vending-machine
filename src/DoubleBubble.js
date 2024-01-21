import React from "react";
import { Link } from "react-router-dom";
import "./DoubleBubble.css"

function DoubleBubble() {
    return (
        <div className="doublebubble">
        <img src="https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/420537/420537"></img>
        <p><Link to="/">Home</Link></p>
        </div>
    )
}

export default DoubleBubble