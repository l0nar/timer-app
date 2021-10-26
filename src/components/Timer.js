import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import { TimerWrapper } from "./styledComponents";
import { InputWrapper } from "./styledComponents";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      timer: 0,
      buttonState: "Start",
    };
  }

  timer = () =>
    this.setState({
      timer: this.state.timer + 1000,
    });

  runTimer = () => {
    if (this.state.buttonState === "Start") {
      this.doTimer = setInterval(this.timer, 1000);
    }
    if (this.state.buttonState === "Stop") {
      clearInterval(this.doTimer);
    }
  };

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  setButtonState = (btnState) => {
    if (btnState) {
      this.setState({
        buttonState: "Stop",
      });
    }
    if (!btnState) {
      this.setState({
        buttonState: "Start",
      });
    }
  };

  getZero = (date) => {
    if (date >= 0 && date < 10) {
      return `0${date}`;
    }
    return date;
  };

  clearState = () => {
    this.setState({
      timer: 0,
      inputValue: "",
    });
  };

  render() {
    let hours = this.getZero(
      Math.floor(this.state.timer / (1000 * 60 * 60)) % 60
    );
    let minutes = this.getZero(
      Math.floor((this.state.timer / (1000 * 60)) % 60)
    );
    let seconds = this.getZero(Math.floor((this.state.timer / 1000) % 60));

    const { setStartTime, addNewTask } = this.props;
    const { timerReducer } = this.props.store;

    const task = {
      name: this.state.inputValue,
      dateStart: timerReducer.dateStart,
      dateFinish: Date.now(),
      leadTime: Date.now() - timerReducer.dateStart,
      id: uniqid(),
    };

    return (
      <div>
        <TimerWrapper>
          <div className="days">00</div>
          <div className="hours">:{hours}</div>
          <div className="minutes">:{minutes}</div>
          <div className="secons">:{seconds}</div>
        </TimerWrapper>
        <InputWrapper>
          <div>
            <label htmlFor="task-name">Taks name:&nbsp;</label>
            <input
              type="text"
              name="task-name"
              autoComplete="off"
              value={this.state.inputValue}
              onChange={(e) => this.handleInput(e)}
            />
          </div>
          <button
            onClick={() => {
              if (this.state.inputValue && this.state.buttonState === "Start") {
                setStartTime(this.state.inputValue);
                this.setButtonState(true);
                this.runTimer();
              }
              if (
                this.state.buttonState === "Stop" &&
                this.state.inputValue !== ""
              ) {
                this.setButtonState(false);
                this.runTimer();
                this.clearState();
                addNewTask(task);
              }
            }}
          >
            {this.state.buttonState}
          </button>
        </InputWrapper>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartTime: (taskName) =>
      dispatch({ type: "START_TASK_TIMER", payload: taskName }),
    addNewTask: (task) => dispatch({ type: "ADD_NEW_TASK", payload: task }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
