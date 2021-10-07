import React from "react";
import Todo from "./Todo";
import "../css/TodoList.css";

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {props.tasks.map((task) => (
        <Todo task={task} key={task.id} doTask={props.doTask} />
      ))}
    </div>
  );
}

export default TodoList;
