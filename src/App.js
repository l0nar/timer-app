import React, { Component } from "react";
import TasksList from "./components/TasksList";
import Timer from "./components/Timer";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Tittle = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Tittle>Timer</Tittle>
        <Timer />
        <TasksList />
      </Wrapper>
    );
  }
}

export default App;
