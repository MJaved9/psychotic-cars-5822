import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import { taskReducer } from "./taskAndProject/reducer";
import { teamReducer } from "./TeamMembers/teamReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,
  team: teamReducer,
});

const middleware = applyMiddleware(thunk);

export const store = legacy_createStore(rootReducer, middleware);