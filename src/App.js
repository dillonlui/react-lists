import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: "",
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: "",
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form>
          <input onChange={this.handleChange} value={this.state.task} type="text" id="taskInput" placeholder="Enter task..." />
          <button onClick={this.onSubmitTask} type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} />
      </div>
    )
  }
}

export default App;