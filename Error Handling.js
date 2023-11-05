const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        try {
          // Add task logic
        } catch (error) {
          return {
            ...state,
            error: error.message,
          };
        }
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
          error: null,
        };
      // ...
    }
  };
  
  // Error handling context and functions
  const setError = (dispatch, errorMessage) => {
    dispatch({ type: 'SET_ERROR', payload: errorMessage });
  };
  
  const clearError = (dispatch) => {
    dispatch({ type: 'CLEAR_ERROR' });
  };
  