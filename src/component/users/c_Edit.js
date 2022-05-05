import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import userActions from '../_action/c_action';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Edit(props) {
    const dispatch = useDispatch();
    const { history } = props
    const user_data = useSelector(((state) => state.users))
    const [user, setUser] = useState({
        name: "",
        country: '',
        file: "",
        gender: "",
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    var indexid = props.match.params.id;
    var i = indexid - 1;
    var data = user_data[i];
    console.log("aaaaaaaaaaaaaa", data);
    function handleChangeFile(e) {
        setUser({ ...user, [e.target.name]: e.target.files[0].name });
    }

    useEffect(() => {
        setUser({ ...data });
    }, []);

    if (user.gender == "Female") {
        var check1;
        check1 = true;
    }

    if (user.gender == "Male") {
        var check;
        check = true;
    }
    function onSubmit(e) {
        dispatch(userActions.userUpdate(user));
        history.push("/");
    }
    return (
        <div className='body'>
            <ul className='ul'>
                <li className='li'>
                    <Link to="/">
                        <button className="adduser">
                            <i class="fas fa-arrow-circle-left"></i>
                        </button>
                    </Link>
                </li>
            </ul>
            <form onSubmit={onSubmit} method="post" className='form'>
                <div className='brand-title'> Edit User </div> <br />
                <div className="container">
                    <br />
                    <label className="lable"> <b> Name </b> </label>
                    <input
                        type="text"
                        id="name"
                        className='input'
                        value={user.name}
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                    <br />

                    <label className="lable"> <b> Gender </b>  </label>
                    <br />
                    <div className='input'>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={check}
                            onClick={handleChange}
                        />
                        Male
                        <br />
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={check1}
                            onClick={handleChange}
                        />
                        Female</div>
                    <br />


                    <label htmlFor="country"> <b> Country </b></label>
                    <select
                        className='input'
                        name="country"
                        value={user.country}
                        onChange={handleChange}
                        required
                    >
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <br /><br />

                    <label className="lable"> <b> File Upload </b> </label>
                    <input
                        className='input'
                        onChange={handleChangeFile}
                        src={user.file}
                        name="file"
                        type="file"
                    />
                    <br />
                    <br />
                    <br />
                    <button type="submit" name='button' className="registerbtn"> Submit </button>
                </div>
            </form>
        </div>
    )
}
export default Edit;