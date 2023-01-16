import React from "react";
import { useRef } from "react";
import "./extra.css";

export default function Search(props){
    const{handleChange} = props
    const value  =  useRef();
    return(
        <div className="searchBar">
            <input className="search_bar" type="text"  placeholder="Enter Your City" ref={value}/>
            <button className="get__weather" onClick={() => handleChange(value.current.value)}>Get Weather</button>
        </div>
    )
}