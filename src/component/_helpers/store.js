import { createStore } from 'redux'
import reducer from "../_reducers/index";

const store = createStore(reducer);
export default store;