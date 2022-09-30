import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import signUpEmpty from "../../../static/assets/images/udg_terrace.jpg"
import signUpPlayer from "../../../static/assets/images/udg_dome.jpg"
import Axios from 'axios';


export default function() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {register, watch, handleSubmit, formState:{errors} } = useForm();
    

    function produceUserList() {

            fetch('http://localhost:5000/users', {
                'methods': 'GET',
                headers: {
                    'Content-Type':'application/json'
                }
            })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(error => console.log(error))

    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/users', {
    //         'methods': 'GET',
    //         headers: {
    //             'Content-Type':'application/json'
    //         }
    //     })
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
    // }, [])
    

    return (
        <div className='admin-container'>
            <div className='form-entries-sign-up'>
                    {/* <label>USERNAME</label>
                    <input
                        placeholder='Your username'    
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}} 
                        />

                    <label>EMAIL</label>
                    <input
                        placeholder='Your email'    
                        type="email"
                        value={email}
                        name="username"
                        onChange={(e)=>{setEmail(e.target.value)}}        
                        />
  
                    <label>PASSWORD</label>
                    <input
                        placeholder='Your password'
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}        
                        />
                

                    <div className='display-user-list'>
                        <button onClick={createUser}>Display Users</button>
                    </div> */}

            </div>
            
            <div className='user-list'>
                <div className='display-user-list'>
                    <button onClick={produceUserList}>Display Users</button>
                </div>
            </div>
            
        </div>
    );
}