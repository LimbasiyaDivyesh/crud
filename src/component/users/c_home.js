import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import userActions from '../_action/c_action';
import {useDispatch} from "react-redux";
import {Table, Tag, Space} from 'antd';
import axios from "axios";
// import 'antd/dist/antd.css';
const Home = () => {
    const dispatch = useDispatch();
    // const users = useSelector(((state) => state.users));
    const [users, setUser] = useState();
    const [search, setSearch] = useState();

    // useEffect(async () =>  {
    //     const getUser = await axios.get(`http://localhost:1234/`);
    //     setUser(getUser.data);
    // },[deleteGet]);


    useEffect(() => {
        try {
            fetch('http://localhost:1234/')
                .then(async response => {
                    const data = await response.json();
                    if (response != '' && response != undefined) {
                        console.log({data})
                        setUser(data);
                    }
                })
                .catch(error => {
                    // this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        } catch (e) {
            console.log({e})
        }
    }, []);

    const ondelete = async (i) => {
        // let indexId = i - 1;
        // dispatch(userActions.userDelete(users[indexId].id));

        // eslint-disable-next-line no-unused-vars
        const deleteUser = await axios.delete(`http://localhost:1234/${i}`);
        const getUser = await axios.get(`http://localhost:1234/`);
        setUser(getUser.data);
    };

    function ondownload(i) {
        // Create an object of formData
    }

    const handleSearch = async (e) => {
        setSearch(e.target.value)
        if (!e.target.value) {
            const getUser = await axios.get(`http://localhost:1234/`);
            setUser(getUser.data)
        } else {
            const searchUser = await axios.get(`http://localhost:1234/search/${e.target.value}`);
            setUser(searchUser.data)
        }
        // console.log(e.target.value)
    }
    const handleSearchButton = async () => {
        if (search) {
            const searchUser = await axios.get(`http://localhost:1234/search/${search}`);
            setUser(searchUser.data)
        } else {
            alert('please enter string')
        }
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'SelectedFile',
            dataIndex: 'selectedFile',
            key: 'selectedFile',
        },
        {
            title: 'Edit',
            render: (i) => (
                <Link to={{pathname: `/Adduser/${i._id}`}}>
                    <button margin='auto' display='block' className="edit"><i class="fas fa-user-edit"></i></button>
                </Link>
            ),
        },
        {
            title: 'Delete',
            render: (i) => (
                <button className="delete"
                        onClick={ondelete.bind(this, i._id)}
                ><i class="fas fa-user-minus"></i>
                </button>
            ),
        },
    ];

    return (
        <>
            <ul className='ul'>
                <li className='li'>
                    <Link to="/Adduser">
                        <button className="adduser"><i className="fas fa-user-plus"></i></button>
                    </Link>
                </li>
            </ul>

            <input type={"search"} onChange={handleSearch}/>
            <button type={"button"} onClick={handleSearchButton}> Search</button>

            <Table dataSource={users == undefined || users?.length ? users : []} columns={columns}/>


            {/* <table>
                <thead>
                    <tr>
                        <th className='th'>Id</th>
                        <th className='th'>Name</th>
                        <th className='th'>Gender</th>
                        <th className='th'>Country</th>
                        <th className='th'>File</th>
                        <th className='th'>Edit</th>
                        <th className='th'>Delete</th>
                        <th className='th'>File Download</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    {
                        users !== null && users.length > 0 && users.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.gender}</td>
                                <td>{d.country}</td>
                                <td>{d.selectedFile.name}</td>
                                <td>
                                    <Link to={{ pathname: `/Edituser/${i}` }} >
                                        <button margin='auto' display='block' className="edit" > <i class="fas fa-user-edit"></i> </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="delete"
                                        onClick={ondelete.bind(this, i)}
                                    > <i class="fas fa-user-minus"></i>
                                    </button>
                                </td>
                                <td>
                                    <button className="delete"
                                        onClick={ondownload.bind(this, i)}
                                    > <i class="fas fa-cloud-download-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table> */}
        </>
    )
}
export default Home;

