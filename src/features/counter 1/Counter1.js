import { useState } from "react"
import {connect,useDispatch } from "react-redux";
function Counter1(props) {
    console.log(props);
    return (
        <div>
            <button className="button" onClick={() => { setCount(count + 1) }}> + </button>

            <span className="value">Count: {count}</span>

            <button className="button" onClick={() => { setCount(count - 1) }}> - </button>
            <h1> {props.name} </h1>
        </div>
    )
}
function mapStateToProps(state){
    console.log(state);
}
export default connect(mapStateToProps)(Counter1);