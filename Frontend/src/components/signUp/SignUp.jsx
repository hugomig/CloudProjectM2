import React, { useState } from 'react';
import './signUp.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');

    const nav = useNavigate();

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try{
            await axios.post('/api/users',{
                firstname,
                lastname,
                username,
                email,
                password,
                birthdate
            });

            nav('/');
        }
        catch(err){
            alert('Error check your informations');
            console.log(err.message);
        }
    }

    return (
        <div>
            <div className="center">
                <h1>Sign in</h1>
                <form action="post">
                    <label>First name : </label>
                    <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)}required/>

                    <label>Family name : </label>
                    <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} required/>

                    <label>Username : </label>
                    <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} required/>

                    <label>Password : </label>
                    <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} required/>

                    <label>Email : </label>
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>

                    <label>Birthdate : </label>
                    <input type="date" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} required/>

                    <br/>
                    <Link to="/login">I have an account</Link>
                    <input type="submit" value="Sign up" onClick={handleFormSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default SignUp;