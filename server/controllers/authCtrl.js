const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {firstName, lastName, email, password} = req.body
        const db = req.app.get('db')
        const userArr = await db.find_user_by_email([email])
        if (userArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.register_user([firstName, lastName, email, hash])
        req.session.user = {firstName: newUserArr[0].first_name, lastName: newUserArr[0].last_name, email: newUserArr[0].email, id: newUserArr[0].user_id, isAdmin: newUserArr[0].is_admin, companyId: newUserArr[0].company_id};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
      },
    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const userAcc = await db.login_user([email])
        if (!userAcc[0]) {
            return res.status(200).send({message: 'email or password is incorrect'})
        }
        let result = bcrypt.compareSync(password, userAcc[0].pass_hash)
        if(!result){
            return res.status(200).send({message: 'email or password is incorrect'})
        }
        req.session.user = {firstName: userAcc[0].first_name, lastName: userAcc[0].last_name, email: userAcc[0].email, id: userAcc[0].user_id, isAdmin: userAcc[0].is_admin, companyId: userAcc[0].company_id}
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
    }
}
