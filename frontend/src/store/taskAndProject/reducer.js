import * as types from "./actionType";

const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, payload],
        isLoading: false,
        isError: false,
      };
    case types.ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.GET_TASK_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TASK_SUCCESS:
      return {
        ...state,
        tasks: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.Delete_TASK:
      const afterDelete = state.tasks.filter((el) => {
        return el._id !== payload;
      });
      return {
        ...state,
        tasks: afterDelete,
      };
    case types.Edit_Task:
      const index = state.tasks.findIndex((i) => i._id === payload._id);
      
      const edited = [...state.tasks];
      edited.splice(index, 1, payload);
      console.log(edited);
      return {
        ...state,
        tasks: edited,
      };

    default:
      return state;
  }
};

export { reducer };