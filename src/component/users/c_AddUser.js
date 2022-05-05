import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Checkbox} from '@material-ui/core'
// import ReeValidate from "ree-validate";
// import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux";
// import userActions from '../_action/c_action';
import {useSelector} from "react-redux";

// import { getElementError } from '@testing-library/dom';

function AddUser(props) {

    const dispatch = useDispatch();
    const {history} = props;
    var autoId = useSelector(((state) => state.users));
    var a = autoId.length + 1;

    var indexid = props.match.params.id;
    if (indexid && indexid !== undefined) {
        var i = indexid - 1;
        var data = autoId[i];
        console.log()
    }

    const [user, setUser] = useState({
        name: "",
        id: 1,
        country: 'australia',
        selectedFile: null,
        gender: "",
        hobb: "",
    });


    if (user?.gender == "Female") {
        var check1;
        check1 = true;
    }

    if (user?.gender == "Male") {
        var check;
        check = true;
    }

    const getData = async () => {
        const getUser = await axios.get(`http://localhost:1234/`);

        if (getUser.status === 200 && getUser.data) {
            const filterData = getUser.data.filter((item, index) => {
                return item._id === indexid
            });
            setUser(filterData[0]);
        }
    }
    console.log({user})
    useEffect(() => {
        setUser({...data});
        getData();
    }, []);

    function handleChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user, [name]: value});
    }

    var onchange1 = () => {
        var imgInp = document.getElementById("imgInp");
        const [file] = imgInp.files
        if (file) {
            var blah = document.getElementById("blah");
            var image = blah.src = URL.createObjectURL(file)
            setUser({...user, selectedFile: image});
        }
        // const [file] = imgInp.files
        // if (file) {
        // //   blah.src = URL.createObjectURL(file)
        // }


        // setUser({ ...user, selectedFile: e.target.files[0] });
    }

    const validateAndSubmit = async (e) => {
        e.preventDefault();

        if (indexid) {
            // dispatch(userActions.userUpdate(user));

            // eslint-disable-next-line no-unused-vars
            const updateUser = await axios.put(`http://localhost:1234/${indexid}`, user)
        } else {
            user.id = a;
            // dispatch(userActions.userRegister(user));

            // eslint-disable-next-line no-unused-vars
            const addUser = await axios.post('http://localhost:1234/', user).catch((res) => console.log(res.response.data))
        }
        // console.log("user set file",user.file);
        history.push("/")
    };
    const handleHobby = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;
        setUser({...user, hobb: {...user?.hobb, [name]: checked}})
    }
    return (
        <div className="body">
            <ul className='ul'>
                <li className='li'>
                    <Link to="/">
                        <button className="adduser"><i class="fas fa-arrow-circle-left"></i></button>
                    </Link>
                </li>
            </ul>
            <form onSubmit={validateAndSubmit} method="post">
                <div className='brand-title'> {indexid ? "Edit user" : "Add user"}  </div>
                <br/>
                <div className="container">
                    <label className="lable"> <b> Name </b> </label>
                    <input
                        type="text"
                        id="name"
                        className='input'
                        name="name"
                        value={user?.name}
                        onChange={handleChange}
                        // value= { data ? edit.name : " " }
                        placeholder="Enter your name"
                        // required
                    />
                    <br/>
                    <br/>
                    <br/>

                    <label className="lable"> <b> Gender </b> </label>
                    {/* <br/> */}
                    <div className='input' id='gender'>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            // value= { edit.gender  }
                            onClick={handleChange}
                            checked={check}
                        />
                        Male
                        <br/>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            // value= {  edit.gender  }
                            checked={check1}
                            onClick={handleChange}
                        /> Female
                    </div>
                    <br/>
                    <label htmlFor="country"> <b> Country </b></label>
                    <select
                        className='input'
                        name="country"
                        value={user?.country}
                        onChange={handleChange}
                        required
                    >
                        <option value="australia">Australia</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                    </select>
                    <br/>

                    <label className="lable"> <b> File Upload </b> </label>
                    <input
                        className='input'
                        id="imgInp"
                        onChange={onchange1}
                        name="file"
                        type="file"
                        value={user?.file}
                    />
                    <label className="lable"> <b> Hobb </b> </label>
                    <div className='input' id='gender'>
                        <Checkbox
                            name='other'
                            value='other'
                            onChange={handleHobby}
                            checked={user?.hobb?.other ? true : false}
                        /> 1111
                        <Checkbox name='Cricket'
                                  value='Cricket'
                                  checked={user?.hobb?.Cricket ? true : false}
                                  onChange={handleHobby}
                        /> Cricket
                        <Checkbox name='Football'
                                  value='Football'
                                  checked={user?.hobb?.Football ? true : false}
                                  onChange={handleHobby}
                        /> Football
                        <Checkbox name='Volleyball'
                                  value='Volleyball'
                                  checked={user?.hobb?.Volleyball ? true : false}
                                  onChange={handleHobby}
                        /> Volleyball
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <button type="submit" name='button' className="registerbtn"> Submit </button>

                </div>
            </form>
        </div>
    )
}

export default AddUser;