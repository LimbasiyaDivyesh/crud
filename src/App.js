// import React from 'react'
// import PropTypes from 'prop-types'
// import { useDispatch, useSelector } from 'react-redux'
// import { Name } from './component/_action/c_action';
// import { incNumber, decNumber } from './component/_action/action';



// function App() {
//   const myState = useSelector((state) => state.changeNumber);
//   var Dispatch = useDispatch();
//   return (
// <div>
//   <button onClick= {()=> Dispatch(incNumber()) } > + </button>
//   <input type='text' value={myState} />
//   <button onClick= {()=> Dispatch(decNumber()) } > - </button>
// </div>
//   )
// }
// export default App

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from './component/users/c_AddUser';
import Edit from './component/users/c_Edit';
import Home from './component/users/c_home';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/"> </Link>
        <Switch>
           {/*<Route exact path="/Adduser" component={AddUser}> </Route>*/}
          <Route exact path="/Adduser/:id?" component={AddUser}>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// import React, { Component } from 'react'
// import Clock from './Clock'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Clock hours={new Date().getHours()} minutes={new Date().getMinutes()} seconds={new Date().getSeconds()} />
//       </div>
//     )
//   }
// }
