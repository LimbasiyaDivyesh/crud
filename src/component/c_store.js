// import { createStore, combineReducers } from 'redux'
// // import c_studentReducer from './_reducers/c_studentReducer'
// // import c_userReducer from './_reducers/c_userReducer'

// const mainReducer = combineReducers(
//     {
//         user: c_userReducer,
//         student: c_studentReducer
//     })

// const commonData = {
//     user: {
//         items: [
//             {
//                 id: 1, name : 'demo', email : 'demo@gmail.com', phone : '123'
//             },
//             {
//                 id: 2, name : 'demo', email : 'demo@gmail.com', phone : '123'
//             }
//         ]
//     },
//     student:{studentId:1, marks:23}
// }

// const store = createStore(mainReducer, commonData)
// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './_reducers/index';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )
);
export default store;

