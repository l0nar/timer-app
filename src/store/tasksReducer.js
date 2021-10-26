const initialValue = {
  tasks: [],
};

const tasksReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default tasksReducer;
