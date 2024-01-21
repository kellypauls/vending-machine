import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css"

function VendingMachine() {
    return (
        <div className="vending">
            <div className="vending-machine">
            <h3 className="greeting">Please choose from the following options in our vending machine!</h3>
            <nav className="options">
                <Link to="/popcorn">Popcorn</Link>
                <Link to="/doublebubble">Double Bubble</Link>
                <Link to="/gatorade">Gatorade</Link>
            </nav>
            <img src="https://cdn-icons-png.flaticon.com/512/5853/5853880.png"></img>
            
            </div>
        </div>
    )
}

export default VendingMachine