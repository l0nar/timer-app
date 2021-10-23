import React, { Component } from "react";

class TaskItem extends Component {
  render() {
    const { task, ind } = this.props;

    const getZero = (date) => {
      if (date >= 0 && date <= 9) {
        return `0${date}`;
      }
      return date;
    };

    const minutes = getZero(Math.floor(task.leadTime / (1000 * 60)) % 60);
    const seconds = getZero(Math.floor(task.leadTime / 1000) % 60);

    return (
      <div>
        <span>
          {ind}.{task.name}, заняло времени {minutes}:{seconds}
        </span>
      </div>
    );
  }
}

export default TaskItem;
