import React from "react";
import "../App.css";
import ToDoItems from "./ToDoItems";
import CreateToDo from "./CreateToDo";

function Container() {
  return (
    <div className="container">
      <h1>TODO</h1>
      <CreateToDo />
      <ToDoItems />
    </div>
  );
}

export default Container;
