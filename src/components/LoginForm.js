import React, {useState} from 'react';
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (e) => {
        e.preventDefault()
        const authObj = {
            'Project-ID': 'c61f035d-8795-4560-8e01-a9c1bd8fd94c',
            'User-Name': username,
            'User-Secret': password
        }
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObj})
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)

            window.location.reload()
        } catch (e) {
            setError('Oops! Incorrect Credential')
        }
    }

    return (
        <>
            <div className='wrapper'>
                <div className='form'>
                    <h1 className='title'>Chat Title</h1>
                    <form action="" onSubmit={submitHandler}>
                        <input
                            className='input'
                            type="text"
                            value={username}
                            placeholder='Username'
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            className='input'
                            type="password"
                            value={password}
                            placeholder='Password'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div align='center'>
                            <button type='submit' className='button'>
                                <span>Start Chatting</span>
                            </button>
                        </div>
                        <div align='center'>
                            <h2 className='error' style={{color: "white"}}>{error}</h2>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LoginForm;