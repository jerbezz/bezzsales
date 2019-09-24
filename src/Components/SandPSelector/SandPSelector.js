import React from 'react'
import {Link} from 'react-router-dom'

function SandPSelector () {
    return (
        <div>
        <Link to='/sale'><button>Sales</button></Link>
        <Link to='/purchase'><button>Purchases</button></Link>
        </div>
    )
}

export default SandPSelector
