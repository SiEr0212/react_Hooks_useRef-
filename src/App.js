import React, { useEffect, useRef } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = (e) => {
    if (e.keyCode === 13) {
      if (e.target.id === "nameInput") {
        ageRef.current.focus();
      }
      if (e.target.id === "ageInput") {
        marriedRef.current.focus();
      }
      if (e.target.id === "marriedInput") {
        submitRef.current.focus();
      }
    }
  };

  const onClickHandle = () => {
    alert("submitted");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hook</h3>
        <div className="form-field">
          <span>Name: </span>
          <input
            ref={nameRef}
            id="nameInput"
            type="text"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>age: </span>
          <input
            ref={ageRef}
            id="ageInput"
            type="text"
            onKeyDown={keyPressHandle}
          />
        </div>
        <div className="form-field">
          <span>Married? </span>
          <input
            ref={marriedRef}
            id="marriedInput"
            type="checkbox"
            onKeyDown={keyPressHandle}
          />
        </div>
        <button
          onClick={onClickHandle}
          ref={submitRef}
          id="submitButton"
          onKeyDown={keyPressHandle}
        >
          Submit
        </button>
        <h6>Use forwarding Ref: useref on Components and not HTML ELements</h6>
        <Input />
      </header>
    </div>
  );
}

export default App;
