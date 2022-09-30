import * as types from "./actionType";
const addTask = (new_task, token) => async (dispatch) => {
  console.log("new_task",new_task)
  dispatch({ type: types.ADD_TASK_REQUEST });
  return await fetch("http://localhost:7500/tasks/create", {
    method: "POST",
    body: JSON.stringify(new_task),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((r) => {
 
      dispatch({ type: types.ADD_TASK_SUCCESS,payload:new_task });
      // return types.ADD_TASK_SUCCESS;
    })

    .catch((e) => {
      console.log("error", e);
      dispatch({ type: types.ADD_TASK_FAILURE });
    });
};

const getTask = (token) => async (dispatch) => {
  dispatch({ type: types.GET_TASK_REQUEST });
  await fetch("http://localhost:7500/tasks/getTasks", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((r) => {
      console.log(r,"data");
      dispatch({ type: types.GET_TASK_SUCCESS, payload: r.tasks});
      return types.GET_TASK_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.GET_TASK_FAILURE, payload: e });
    });
};

const deleteTask = (id, token) => async (dispatch) => {
  return await fetch(
    `http://localhost:7500/tasks/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: types.Delete_TASK, payload: id });
      return types.Delete_TASK;
    });
};

const updateTask = (id, token, payload) => async (dispatch) => {
  return await fetch(`http://localhost:7500/tasks/edit/${id}`, {
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