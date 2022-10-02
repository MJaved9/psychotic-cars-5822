import axios from "axios";
import {
  ADD_TEAM_MEMBERS_ERROR,
  ADD_TEAM_MEMBERS_LOADING,
  DELETE_TEAM_MEMBERS_ERROR,
  DELETE_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_ERROR,
  GET_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_SUCCESS,
} from "./actionTypes";

export const getTeamMembers = (token) => async (dispatch) => {
  dispatch({
    type: GET_TEAM_MEMBERS_LOADING,
    payload: true,
  });
  try {
    const res = await axios({
      method: "GET",
      url: "https://bitrix24-backend.herokuapp.com/groups/getGroups",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: GET_TEAM_MEMBERS_SUCCESS,
      payload: res.data.groups,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_TEAM_MEMBERS_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: GET_TEAM_MEMBERS_LOADING,
      payload: false,
    });
  }
};

export const addTeamMembers = (token, formData) => async (dispatch) => {
  dispatch({
    type: ADD_TEAM_MEMBERS_LOADING,
    payload: true,
  });
  try {
    await axios({
      method: "POST",
      url: "https://bitrix24-backend.herokuapp.com/groups/create",
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getTeamMembers(token));
  } catch (e) {
    console.log(e);
    dispatch({
      type: ADD_TEAM_MEMBERS_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: ADD_TEAM_MEMBERS_LOADING,
      payload: false,
    });
  }
};

export const deleteTeamMembers = (token, id) => async (dispatch) => {
  dispatch({
    type: DELETE_TEAM_MEMBERS_LOADING,
    payload: true,
  });
  try {
    await axios({
      method: "DELETE",
      url: `https://bitrix24-backend.herokuapp.com/groups/delete/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(getTeamMembers(token));
  } catch (e) {
    console.log(e);
    dispatch({
      type: DELETE_TEAM_MEMBERS_ERROR,
      payload: true,
    });
  } finally {
    dispatch({
      type: DELETE_TEAM_MEMBERS_LOADING,
      payload: false,
    });
  }
};
