import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './successfull.css';

const Successfull = () => {
    const nav = useNavigate();
    const [ loading, setLoading ] = useState(true);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        checkIsLogged();
        loadUsers();
    }, []);

    const checkIsLogged = async () => {
        const isLogged = (await localStorage.getItem('isLogged')) === 'true';
        if(isLogged) {
            setLoading(false);
        }
        else {
            nav('/login');
        }
    }

    const loadUsers = async () => {
        const jwt = localStorage.getItem('jwt');
        const response = await axios.get('/api/users/', {
            headers: { Authorization: `Bearer ${jwt}` }
        });
        setUsers(response.data);
    }

    const handleLogoutClick = async () => {
        await localStorage.setItem('isLogged', false);
        checkIsLogged();
    }

    return (
        <div id="successfull">
            { loading ?
                <div id="successfull_container">
                    Loading...
                </div>
                :
                <div id="successfull_container">
                    <br/><br/><br/>Welcome to partymaker.io<br/><br/><br/>
                    You have successfully logged in, it is now time for you to create or take part in a party !!!<br/><br/>
                    ENJOY ;D
                    <br/><br/>
                    <div id="left">
                        Voici la liste des utilisateurs
                        <ul>
                            { users.map((username) => {
                                return <li key={username}>{username}</li>
                            })}
                        </ul>
                    </div>
                    <br/><br/><button onClick={handleLogoutClick}>Logout</button>
                </div>
            }
        </div>
    )
}

export default Successfull;