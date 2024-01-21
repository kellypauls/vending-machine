import React from "react";
import { Link } from "react-router-dom";
import "./Popcorn.css"

function Popcorn() {
    return (
        <div className="popcorn">
        <img src="https://d3omj40jjfp5tk.cloudfront.net/products/595bd8d9323e4b4564216549/large.png"></img>
        <p><Link to="/">Home</Link></p>
        </div>
        
    )
}

export default Popcorn;