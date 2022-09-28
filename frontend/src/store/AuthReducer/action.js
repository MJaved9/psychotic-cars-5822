import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "post",
    url: "https://reqres.in/api/login",
    data: payload,
  })
    .then((r) => {
      console.log(r);
      localStorage.setItem("token", r.data.token);
      // localStorage.setItem("", r.data.token);
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};

// const login = (payload) => async (dispatch) => {
//   dispatch({ type: types.LOGIN_REQUEST });
//   return await fetch("https://reqres.in/api/login", {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((r) => r.json())
//     .then((r) => {
//       // console.log(r)
//       dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
//     })
//     .catch((e) => {
//       // console.log(e);
//       dispatch({ type: types.FAILURE });
//     });
// };

export { login };
