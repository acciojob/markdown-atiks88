import React  from "react";
import ReactDom from "react-dom";
import { useEffect,useState } from "react";
import "./Components/styles/App.css";

function App (){

  const [inputValue, setInput] = useState("");

  const setDatafor = (e) => {
    setInput(e.target.innerText);
  }

  useEffect(() => {}, [inputValue]);

  return (
    <div className="app">
      <div className="textarea" contentEditable="true" onInput={setDatafor}></div>
      <div className="preview">{inputValue}</div>
    </div>
  );
}

export default App;