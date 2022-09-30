import React, { Component } from 'react';
import { Navbar } from "./components/Navbar";
import { TodoRows } from "./components/TodoRows";
export default class App extends Component {
  //-----------------constructor here-------------------------------
  constructor(props) {
    super(props);

    this.state = {
      userName: "David",
      todoItems: [
        { action: "Buy milk", done: true },
        { action: "Dentist at 5 pm", done: false },
        { action: "Go to Gym", done: false }
      ],
      newToDo: "",
    };
  }
  // ----------------functions here-----------------------------

  toggleDone = (todo) => {
    return this.setState({
      todoItems: this.state.todoItems.map((item) => {
        return item.action === todo.action ? { ...item, done: !item.done } : item
      }),
    })
  }



  updateValue = (event) => {
    return this.setState({ newToDo: event.target.value });
  }

  newToDo = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newToDo, done: false }
      ]
    })
  }

  todoRows = () => {
    return this.state.todoItems.map((item) => 
    <TodoRows key={item.action} item={item} callback={this.toggleDone} /> );
  }

  // ------------------------------JSX here-------------------------------
  render = () => (
    <div className="container">
      <div className="row">
        <Navbar name={this.state.userName} />
        <div className="col-12">
          <input
            className="form-control"
            value={this.state.newToDo}
            onChange={this.updateValue}
          />
          <button
            className="btn btn-primary m-2"
            onClick={this.newToDo}
          >
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>

      </div>
    </div>

  )

}



