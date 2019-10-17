import React, { useState } from 'react'
import axios from 'axios'

function Register(props) {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const registerUser = async (e) => {
        e.preventDefault()
        try {
            let res = await axios.post("/auth/register", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            if (res.data.loggedIn) props.history.push("/storeselector")
            else alert(res.data.message)
        } catch (error) {
            console.log({ error })
        }
    }
    return (
        <div>
            Register
            <form onSubmit={registerUser}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register