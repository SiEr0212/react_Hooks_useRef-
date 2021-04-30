import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hook</h3>
        <div className="form-field">
          <span>Name: </span>
          <input ref={nameRef} type="text" />
        </div>
        <div className="form-field">
          <span>age: </span>
          <input ref={ageRef} type="text" />
        </div>
        <div className="form-field">
          <span>Married? </span>
          <input ref={marriedRef} type="checkbox" />
        </div>
        <button ref={submitRef}>Submit</button>
      </header>
    </div>
  );
}

export default App;
