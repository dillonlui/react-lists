import React, { Component } from "react";

class App extends Component {
  render() {
    return <div>Hello World</div>;
  }
}

export default App;

export function taskManager() {
  let taskList = []
  function addTask() {
    const task = document.getElementById('taskInput').innerText;
    taskList.push(task);
  }
  document.getElementById('submitBtn').addEventListener('click', addTask());
}

export function taskForm() {
  return (
    <div>
      <div>
        <form>
          <input type="text" placeholder="Enter task" id="taskInput"></input>
          <button id="submitBtn">Submit</button>
        </form>
      </div>
      <div>
        <ol>

        </ol>
      </div>
    </div>
  )
}