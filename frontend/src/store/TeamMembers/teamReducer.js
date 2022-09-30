import {
  ADD_TEAM_MEMBERS_ERROR,
  ADD_TEAM_MEMBERS_LOADING,
  DELETE_TEAM_MEMBERS_ERROR,
  DELETE_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_ERROR,
  GET_TEAM_MEMBERS_LOADING,
  GET_TEAM_MEMBERS_SUCCESS,
} from "./actionTypes";

const teamIntialState = {
  data: [],
  get: {
    loading: false,
    error: false,
  },
  post: {
    loading: false,
    error: false,
  },
  patch: {
    loading: false,
    error: false,
  },
  delete: {
    loading: false,
    error: false,
  },
};

const teamReducer = (state = teamIntialState, { type, payload }) => {
  switch (type) {
    case GET_TEAM_MEMBERS_LOADING: {
      return {
        ...state,
        get: {
          ...state.get,
          loading: payload,
        },
      };
    }
    case GET_TEAM_MEMBERS_SUCCESS: {
      return {
        ...state,
        data: payload,
      };
    }
    case GET_TEAM_MEMBERS_ERROR: {
      return {
        ...state,
        get: {
          ...state.get,
          error: payload,
        },
      };
    }
    case ADD_TEAM_MEMBERS_LOADING: {
      return {
        ...state,
        post: {
          ...state.post,
          loading: payload,
        },
      };
    }
    case ADD_TEAM_MEMBERS_ERROR: {
      return {
        ...state,
        post: {
          ...state.post,
          error: payload,
        },
      };
    }
    case DELETE_TEAM_MEMBERS_LOADING: {
      return {
        ...state,
        delete: {
          ...state.delete,
          loading: payload,
        },
      };
    }
    case DELETE_TEAM_MEMBERS_ERROR: {
      return {
        ...state,
        delete: {
          ...state.delete,
          error: payload,
        },
      };
    }
    default: {
      return state;
    }
  }
};
