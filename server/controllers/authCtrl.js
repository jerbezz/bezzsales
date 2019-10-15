const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {firstName, lastName, email, password} = req.body
        const db = req.app.get('db')
        const userArr = await db.findUserByEmail([email])
        if (userArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.registerUser([firstName, lastName, email, hash])
        req.session.user = {firstName: newUserArr[0].firstName, lastName: newUserArr[0].lastName, email: newUserArr[0].email, id: newUserArr[0].userId, isAdmin: newUserArr[0].isAdmin};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
      },
    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const userAcc = await db.loginUser([email])
        if (!userAcc[0]) {
            return res.status(200).send({message: 'account not found'})
        }
        let result = bcrypt.compareSync(password, userAcc[0].passhash)
        if(!result){
            return res.status(200).send({message: 'incorrect password'})
        }
        req.session.user = {firstName: userAcc[0].firstname, lastName: userAcc[0].lastname, email: userAcc[0].email, id: userAcc[0].userid, isAdmin: userAcc[0].isadmin}
        res.status(200).send({
            message: 'log in successful',
            userData: req.session.user,
            loggedIn: true
        })
    },
    logout: (req, res) => {
        req.session.destroy()
        res.redirect('http://localhost:3000/#/')
    },
    userData: (req, res) => {
        if(req.session.user) res.status(200).send(req.session.user)
      else res.status(401).send('please log in');
      console.log(req.session.user)
    }
}
