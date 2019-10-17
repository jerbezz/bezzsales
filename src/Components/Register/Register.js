import React, {useState} from 'react'
import Button from 'antd/lib/button'
import axios from 'axios'

function Register () {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    return (
        <div>
            Register
            <Button type="primary">Button</Button>
        </div>
    )
}

export default Register