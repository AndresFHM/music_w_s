import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export default function() {
    const [fname, setFName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    
    const sendMessage = () => {
        console.log("Message sent")
        console.log(fname)
        console.log(email)
        console.log(message)


        setFName('')
        setEmail('')
        setMessage('')

    }

    return (
        <div className='contact-container'>
                <div className='contact-entries'>
                    <label>First Name</label>
                    <input
                        placeholder='Your name'    
                        type="text"
                        value={fname}
                        name="fname"
                        onChange={(e)=>{setFName(e.target.value)}} 
                        />

                    <label>EMAIL</label>
                    <input
                        placeholder='Your email'    
                        type="email"
                        value={email}
                        name="username"
                        onChange={(e)=>{setEmail(e.target.value)}}        
                        />
  
                    <label>MESSAGE</label>
                    <input
                        placeholder='Your message'
                        type="message"
                        value={message}
                        name="message"
                        onChange={(e)=>{setMessage(e.target.value)}}        
                        />
                
                    <div className='send-bt'>
                        <button onClick={sendMessage}>Send</button>
                    </div>

                </div>

        </div>
    );
}