import React, { Component } from "react";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";

class TasksList extends Component {
  render() {
    const { tasks } = this.props.store.tasksReducer;
    return (
      <div>
        {tasks.map((item, i) => {
          return <TaskItem task={item} key={item.id} ind={i + 1} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    store,
  };
};

export default connect(mapStateToProps)(TasksList);
