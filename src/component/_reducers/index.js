// import changeNumber from './upDown';
// import { combineReducers } from 'redux'

// const reducer = combineReducers({changeNumber});
// export default  reducer;

import { combineReducers } from "redux";
import users from "./c_userReducer";

export const rootReducer = combineReducers({ users });
export default  users;

