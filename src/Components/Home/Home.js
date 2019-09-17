import React from 'react'
import {Link} from 'react-router-dom'

function Home () {
    return (
    <div>
        <h1>Hello Puppet</h1>
        <Link to='/storeselector'><button>Login</button></Link>
    </div>
    )}

export default Home
