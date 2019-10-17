import React, { useState } from 'react'
import axios from 'axios'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("/auth/login", {
                email: email,
                password: password,
            })
            if (res.data.loggedIn) props.history.push("/storeselector")
            else alert(res.data.message)
        } catch (error) {
            console.log({ error })
        }
    }

    return (
        <div>
            Login

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div>
                    <button type="submit">
                        Login
                        </button>
                </div>
            </form>
        </div>
    )
}

export default Login