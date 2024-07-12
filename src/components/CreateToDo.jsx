import React, { useState, useContext } from "react";
import "../App.css";
import { ToDo } from "../store/todocontext";

function CreateToDo() {
  const { toDoList, setToDoList } = useContext(ToDo);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleOnClick = () => {
    const newToDoList = [...toDoList, { content: text, date: date }];
    if (text !== "") {
      setToDoList(newToDoList);
      setText("");
    }
  };
  return (
    <div className="create">
      <input
        type="text"
        className="itext"
        placeholder="Enter text here"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <input
        type="date"
        className="idate"
        onChange={(event) => setDate(event.target.value)}
      />
      <button className="ibutton" onClick={handleOnClick}>
        Add
      </button>
    </div>
  );
}

export default CreateToDo;
