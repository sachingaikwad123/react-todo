import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./todo/Todo";

function App() {
  return (
    <>
      <div>My Todo Application</div>
      <button>Submit</button>

      <Todo></Todo>
    </>
  );
}

export default App;
