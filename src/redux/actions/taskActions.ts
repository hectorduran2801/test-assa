export const addTask = (description: string) => ({
    type: 'ADD_TASK',
    payload: {
      description,
    },
  });
  