import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Timer from "./components/Timer";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Timer-app</h1>
        <Timer />
        <TasksList />
      </div>
    );
  }
}

export default App;
