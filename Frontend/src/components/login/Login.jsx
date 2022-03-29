import React, { useState } from 'react';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
const axios = require('axios');

const Login = () => {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await axios.post('/api/auth',{
                username,
                password 
            });

            await localStorage.setItem('isLogged', true);
            await localStorage.setItem('jwt', response.data);
            nav('/');
        }
        catch(err){
            alert('Invalid credentials');
        }
    }

    return (
        <div>
            <div className="center">
                <h1>Login</h1>
                <form>
                    <div className="txt_field">
                        <label>Username : </label>
                        <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} required />
                    </div><br/>
                        <div className="txt_field">
                        <label>Password :</label>
                        <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)}required />
                    </div><br/>

                    <Link to="/signUp">I don't have an account</Link>

                    <br/><input type="submit" value="Login" onClick={handleFormSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default Login;