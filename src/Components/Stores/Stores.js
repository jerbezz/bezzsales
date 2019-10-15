import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Stores () {
    const [data, setData] = useState([])

    // useEffect(() => {
    //     getData()
    // }, [])

    // const getAuth = async () => {
    //     let res = await axios.get("/auth/user-data")
    //     setPost(res.data)
    // }

    // useEffect(async () => {
    //     const results = await axios(
    //         "/auth/user-data"
    //     )
    //     setData(results.data)
    // })

    async function getUserData() {
        const response = await axios.get('/auth/user-data')
        // const json = await response
        setData(response.data)
    }
    useEffect(() => {
        getUserData()
    }, [])

    console.log({data})
    return (
    <div>

    <h1>List of Stores</h1>
    <Link to='/sorp'><button>Store 1</button></Link>
    </div>
    )
}

export default Stores
