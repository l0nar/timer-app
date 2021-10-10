import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TimerWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      width: 100px;
    `;

    const { store } = this.props;
    console.log(store);

    return (
      <div>
        <TimerWrapper>
          <div className="days">00</div>
          <div className="hours">00</div>
          <div className="minutes">00</div>
          <div className="secons">00</div>
        </TimerWrapper>
        <button>Start/Stop</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(Timer);
