import { React, useContext } from "react";
import { ToDo } from "../store/todocontext";
import "../App.css";

function ToDoItems() {
  const { toDoList, setToDoList } = useContext(ToDo);
  const handleDelete = (item) => {
    const newToDoList = toDoList.filter((i) => i.content !== item.content);
    setToDoList(newToDoList);
  };
  return (
    <div>
      <ul className="ul">
        {toDoList.map((item) => (
          <li key={`${item.content}`} className="listitem">
            {item.content} - {item.date}
            <button
              className="listdelete"
              onClick={(event) => handleDelete(item)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoItems;
