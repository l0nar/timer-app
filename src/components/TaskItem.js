import React, { Component } from "react";
import { StyledTaskItem } from "./styledComponents";

class TaskItem extends Component {
  render() {
    const { task, ind } = this.props;
    console.log(task);

    const getZero = (date) => {
      if (date >= 0 && date <= 9) {
        return `0${date}`;
      }
      return date;
    };

    const minutes = getZero(Math.floor(task.leadTime / (1000 * 60)) % 60);
    const seconds = getZero(Math.floor(task.leadTime / 1000) % 60);

    return (
      <StyledTaskItem>
        <span>
          {ind}.{task.name}, заняло времени {minutes}:{seconds}
          <p>{Date(task.dateStart)}</p>
        </span>
      </StyledTaskItem>
    );
  }
}

export default TaskItem;
