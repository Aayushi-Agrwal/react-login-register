import React from "react";
import Register from "./Register.jsx";
import Login from "./Login.jsx";

var userIsRegistered = true;

function Form() {
  return <div> {userIsRegistered ? <Login /> : <Register />} </div>;
}

export default Form;
