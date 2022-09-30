import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logonPlayer from "../../../static/assets/images/udg_violin.jpg"


export default function() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    
    const logon = () => {
        console.log("form submitted")
        console.log(username)
        console.log(password)


        setUsername('')
        setPassword('')


    }


    return (
        <div className='signup-container'>
            <div
                className="form-log-on"
                style={{
                    background: "url(" + logonPlayer + ") no-repeat",
                    backgroundSize: "cover"
                }}>
                <div className='form-entries-log-on'>
                    <label>USERNAME</label>
                    <input
                        placeholder='Your username'    
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}} 
                        />
                    <label>PASSWORD</label>
                    <input
                        placeholder='Your password'
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}        
                        />
                    <div className='signup-bt'>
                        <button onClick={logon}>Submit</button>
                    </div>
                    <div className='small-letters'>
                        <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                    </div>           
                </div>
            </div>
            <div
                className='empty-space-log-on'></div>
        </div>
    );
}