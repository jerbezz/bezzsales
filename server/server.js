require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

//controllers from server/controllers
const authCtrl = require('./controllers/authCtrl')
const createCompany = require('./controllers/createCompany')


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, () => {
        console.log(`Still got it on port: ${SERVER_PORT}`)
    })
    console.log(db.listTables())
})

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

// authorization endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/logout', authCtrl.logout)
app.get('/auth/user-data', authCtrl.userData)

// create a company endpoint
app.post('company/create', createCompany.create)