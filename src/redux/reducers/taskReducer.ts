const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTask = {
        id: state.length + 1,
        description: action.payload.description,
      };
      return [...state, newTask];
    default:
      return state;
  }
};

export default taskReducer;
