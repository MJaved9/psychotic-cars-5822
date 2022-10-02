import * as types from "./actionType";
const addTask = (new_task, token) => async (dispatch) => {
  console.log("new_task", new_task);
  dispatch({ type: types.ADD_TASK_REQUEST });
  try {
    await fetch("https://bitrix24-backend.herokuapp.com/tasks/create", {
      method: "POST",
      body: JSON.stringify(new_task),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: types.ADD_TASK_SUCCESS });
    dispatch(getTask(token));
  } catch (e) {
    dispatch({ type: types.ADD_TASK_FAILURE });
  }
};

const getTask = (token) => async (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  const r = await fetch("https://bitrix24-backend.herokuapp.com/tasks/getTasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const res = await r.json();
  console.log(res);
  try {
    dispatch({ type: types.GET_TASK_SUCCESS, payload: res.tasks });
  } catch (e) {
    dispatch({ type: types.GET_TASK_FAILURE });
  }
};

const deleteTask = (id, token) => async (dispatch) => {
  return await fetch(`https://bitrix24-backend.herokuapp.com/tasks/delete/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.Delete_TASK, payload: id });
      return types.Delete_TASK;
    });
};

const updateTask = (id, token, payload) => async (dispatch) => {
  return await fetch(`https://bitrix24-backend.herokuapp.com/tasks/edit/${id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      dispatch({ type: types.Edit_Task, payload: res.data });
      return types.Edit_Task;
    });
};

export { addTask, getTask, deleteTask, updateTask };
