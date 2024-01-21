import React from "react";
import { Link } from "react-router-dom";
import "./Gatorade.css"

function Gatorade() {
    return (
        <div className="gatorade">
        <img src="https://media4.giphy.com/media/izyPuncmBn1WQlHJmK/giphy.gif?cid=6c09b952y3exbf57s99ap88t2r31yaf5rkahpi450zgvo6mi&ep=v1_stickers_related&rid=giphy.gif&ct=s"></img>
        <p><Link to="/">Home</Link></p>
        </div>
        
    )
}

export default Gatorade