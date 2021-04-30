import React, { useEffect, useRef } from "react";
import "./App.css";
import Input from "./components/Input";

const inputStyle = {
  width: "400px",
  height: "40px",
  fontSize: "30px",
  margin: "10px",
};

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    firstNameRef.current.focus();
    //nameRef.current.focus();
  }, []);

const firstNameKeyDown = () => {

}

const lastNameKeyDown = () => {
  
}


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
        <h6>Use forwarding Ref: useref on Components and not HTML ELements</h6>
        <Input
          ref={firstNameRef}
          placeholder="type first name here"
          style={inputStyle}
          onKeyDown={firstNameKeyDown}
        />
        <Input
          ref={lastNameRef}
          placeholder="type last name here"
          style={inputStyle}
          onKeyDown={lastNameKeyDown}
        />
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
      </header>
    </div>
  );
}

export default App;
