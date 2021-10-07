import React from "react";
import "../css/Todo.css";

class Todo extends React.Component {
  render() {
    return (
      <div className={`list-item ${this.props.task.done ? "done" : ""}`}>
        {this.props.task.content}
        <button
          onClick={() => {
            // this.setState((prevState) => ({ done: !prevState.done }));
            this.props.doTask(this.props.task.id);
          }}
          className="delete is-pulled-right"
          style={{ height: 15, width: 10 }}
        />
      </div>
    );
  }
}

export default Todo;
