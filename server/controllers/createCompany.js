module.exports = {
    create: async (req, res) => {
        const {companyName} = req.body
        const user_id = req.session.user.id
        const db = req.app.get('db')
        const createdCompany = await db.create_a_company([companyName, user_id])
        res.status(200).send(createdCompany)
    }
}