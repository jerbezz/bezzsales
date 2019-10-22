import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Stores() {
    const [data, setData] = useState([])
    const [company, setCompany] = useState('')

    async function getUserData() {
        const response = await axios.get('/auth/user-data')
        setData(response.data)
    }
    useEffect(() => {
        getUserData()
    }, [])

    const handleCreateCompany = async (e) => {
        e.preventDefault()
        await axios.post("/company/create", {
            companyName: company
        })
    }

    console.log({ data })
    return data.companyId ? (
        <div>

            <h1>List of Stores</h1>
            <Link to='/sorp'><button>Store 1</button></Link>
        </div>
    ) :
        (
            <div>Create A Company to Get Started
            <form onSubmit={handleCreateCompany}>
                    <input type='text' required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder='Company Name' />
                    <input type='submit' value='Create Company' />
                </form>
            </div>
        )
}

export default Stores
