import React, { Component } from "react";
import "../css/form.css";

class Form extends Component {
  state = { textFieldContent: "" };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.textFieldContent}
          onChange={(e) => {
            this.setState({ textFieldContent: e.target.value });
          }}
          className="input"
          placeholder="Agrega una tarea"
        />
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            if (this.state.textFieldContent) {
              this.props.onSubmit(this.state.textFieldContent);
              this.setState({ textFieldContent: "" });
            }
          }}
        >
          Enviar
        </button>
      </form>
    );
  }
}

export default Form;
