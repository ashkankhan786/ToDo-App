import { createContext, useState } from "react";

export const ToDo = createContext([]);

const ToDoProv = (props) => {
  const [toDoList, setToDoList] = useState([]);
  return (
    <ToDo.Provider value={{ toDoList, setToDoList }}>
      {props.children}
    </ToDo.Provider>
  );
};

export default ToDoProv;
