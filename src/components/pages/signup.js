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
    
    const createUser = () => {
        console.log("form submitted")
        console.log(username)
        // console.log(email)
        console.log(password)
        // console.log(confirmPassword)

        setUsername('')
        // setEmail('')
        setPassword('')
        // setConfirmPassword('')

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
        <div className='signup-container'>
            <div className='empty-space-sign-up'style={{background: "url(" + signUpEmpty + ") no-repeat", backgroundSize: "cover", backgroundPosition: "83.3% 1%"}}>
                <div className='form-entries-sign-up'>
                    <label>USERNAME</label>
                    <input
                        placeholder='Your username'    
                        type="text"
                        value={username}
                        name="username"
                        onChange={(e)=>{setUsername(e.target.value)}} 
                        />

                    {/* <label>EMAIL</label>
                    <input
                        placeholder='Your email'    
                        type="email"
                        value={email}
                        name="username"
                        onChange={(e)=>{setEmail(e.target.value)}}        
                        /> */}
  
                    <label>PASSWORD</label>
                    <input
                        placeholder='Your password'
                        type="password"
                        value={password}
                        name="password"
                        onChange={(e)=>{setPassword(e.target.value)}}        
                        />
                

                    {/* <label>CONFIRM PASSWORD</label>
                    <input
                        placeholder='Your password'
                        type="password"
                        value={confirmPassword}
                        name="confirmPassword"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}        
                        /> */}
                    <div className='signup-bt'>
                        <button onClick={createUser}>Submit</button>
                    </div>

                    <div className='small-letters'>
                        <small>Already have an account? <Link to='/logon'>Log In!</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
}




// import React, { useState, useEffect } from 'react';
// import Axios from 'axios';


// export default function() {

//     const [userName, setUserName] = useState('');
//     const [password, setPassword] = useState('');

//     const signUpNewUser = () => {
//         Axios.post('http://localhost:3005/api/insert', {
//             userName: userName,
//             password: password
//         }).then(() => {
//             alert("successful insert");
//         })
//     };


//     return (
//         <div>
//             <h1>THIS IS  WHERE YOU REGISTER</h1>
//             <div className="form">
//                 <label>USERNAME</label>
//                 <input type="text" name="username" onChange={(e) => {
//                     setUserName(e.target.value)
//                 }}/>
//                 <label>PASSWORD</label>
//                 <input type="text" name="password" onChange={(e) => {
//                     setPassword(e.target.value)
//                 }}/>
//                 <button onClick={signUpNewUser}>Submit</button>
//             </div>
//         </div>
//     );
// }