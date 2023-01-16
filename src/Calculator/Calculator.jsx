import React, { useState } from "react";
import "./calculator.css";
import { FiDelete } from "react-icons/fi";


const operators = ["+" , "-" , "/" , "*" , "%" , "." , "="];

export default function Calcultor() {
  
  const [result , setResult] = useState("");
  const [current , setCurrent] = useState("");


  function HandleClick(value){
   
      if(operators.includes(value) && current === ""){
        return;
      };
      if(operators.includes(value) && operators.includes(current.slice(-1))){
        return;
      }
      
      setCurrent(current + value)

      if(!operators.includes(value)){
        // eslint-disable-next-line no-eval
        setResult(eval(current + value).toString())
      }
    
  }
  function AllClear(){

      setCurrent("");
      setResult("");
    
  }
  function Delete(){
    setCurrent(current.slice(0 , -1))
  }
  function clear(){
    setCurrent("")
  }
  function Evaluate(){
    // eslint-disable-next-line no-eval
    setCurrent(eval(current).toString())
  }
  
  return (
    <section className="calculator">
      <div className="display">
        <span className="previous_state">{result} </span>
        <span className="current_state">{current}</span>
      </div>
      <div className="buttons">
        <div className="function_buttons_box">
          <button className="function_buttons"onClick={() => HandleClick("%")}>%</button>
          <button className="function_buttons" onClick={() => AllClear()}>AC</button>
          <button className="function_buttons" onClick={() => clear()}>C</button>
          <button className="function_buttons red" onClick={() => Delete()}>
            <FiDelete />
          </button>
        </div>
        <div className="input_buttons_box">
          <button className="input_buttons" onClick={() => HandleClick("7")}>
            7
          </button>
          <button className="input_buttons" onClick={() => HandleClick("8")}>
            8
          </button>
          <button className="input_buttons" onClick={() => HandleClick("9")}>
            9
          </button>
          <button className="input_buttons" onClick={() => HandleClick("*")}>
            X
          </button>
          <button className="input_buttons" onClick={() => HandleClick("6")}>
            6
          </button>
          <button className="input_buttons"onClick={() => HandleClick("5")}>
            5
          </button>
          <button className="input_buttons" onClick={() => HandleClick("4")}>
            4
          </button>
          <button className="input_buttons" onClick={() => HandleClick("-")}>
            -
          </button>
          <button className="input_buttons" onClick={() => HandleClick("3")}>
            3
          </button>
          <button className="input_buttons" onClick={() => HandleClick("2")}>
            2
          </button>
          <button className="input_buttons" onClick={() => HandleClick("1")}>
            1
          </button>
          <button className="input_buttons" onClick={() => HandleClick("+")}>
            +
          </button>
          <button className="input_buttons" onClick={() => HandleClick(".")}>
            .
          </button>
          <button className="input_buttons" onClick={() => HandleClick("0")}>
            0
          </button>
          <button
            className="input_buttons blue" onClick={() => Evaluate()}
          >
            =
          </button>
          <button className="input_buttons" onClick={() => HandleClick("/")}>
            ÷
          </button>
        </div>
      </div>
    </section>
  );
}
