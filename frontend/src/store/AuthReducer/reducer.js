import * as types from "./actionTypes";
const token=localStorage.getItem("token");
const initialState = {
  data: {
    isAuth: (token)?true:false,
    token: "",
  },
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, isAuth: true, token: payload },
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        data: { ...state.data, isAuth: false, token: "" },
        isError: true,
      };
    default:
      return state;
  }
};
