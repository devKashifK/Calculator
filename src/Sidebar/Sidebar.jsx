import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"



export default function Options(){
    const [Name , setName] = useState("Calculator");

    function ChangeName(value){
       setName(value);
    }
    return(
    <section className="sidebar">
        <span className="menu_name">{Name}</span>
        <div className="sidebar_container">
            <ul className="navbar">
                <Link to='/'  className="menu_items" onClick={() => ChangeName("Calculator")}>Calculator</Link>
                <Link to="/currency" className="menu_items" onClick={() => ChangeName("Currency Converter")}>Currency Converter</Link>
                <Link to="weather"  className="menu_items"onClick={() => ChangeName("Weather Info")}>Weather Info</Link>
            </ul>
        </div>
    </section>
    )
}