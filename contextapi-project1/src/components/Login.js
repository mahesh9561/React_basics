import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState()

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
    }
    return (
        <div>
            <input type="text"
                onChange={(e) => { setUserName(e.target.value) }}
                placeholder='UserName'
            />
            <input type="text"
                onChange={(e) => { setUserName(e.target.value) }}
                placeholder='Password'
            />
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login
