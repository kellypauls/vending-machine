import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Popcorn from "./Popcorn";
import Gatorade from "./Gatorade";
import DoubleBubble from "./DoubleBubble";
import NavBar from "./NavBar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<VendingMachine/>}/>
                <Route path="/popcorn" element={<Popcorn/>}/>
                <Route path="/gatorade" element={<Gatorade/>}/>
                <Route path="/doublebubble" element={<DoubleBubble/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
