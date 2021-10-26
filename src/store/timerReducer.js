const initialValue = {
  dateStart: Date.now(),
  taskName: "",
};

const timerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "START_TASK_TIMER":
      return {
        ...state,
        dateStart: Date.now(),
        taskName: action.payload,
      };
    default:
      return state;
  }
};

export default timerReducer;
