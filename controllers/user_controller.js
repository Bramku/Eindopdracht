//
// CRUD operaties op User
//
let User = require('../model/User')
const assert = require('assert')

let userlist = []

module.exports = {

    createUser(req, res, next) {
        console.log('usercontroller.createUser')

        assert(req.body.firstname, 'firstname must be provided')
        assert(req.body.lastname, 'lastname must be provided')
        assert(req.body.email, 'email must be provided')
        assert(req.body.password, 'password must be provided')

        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const email = req.body.email
        const password = req.body.password
        console.log("We got " + firstname + " " + lastname)

        let user = new User(firstname, lastname, email, password)
        // Add to database
        userlist.push(user)

        res.status(200).json(user).end();
    },

    readUser(req, res, next) {
        res.status(200).json(userlist).end();
    },

    updateUser(req, res, next) {
        let user = new User("Robin", "Schellius")
        res.status(200).json(user).end();
    },
    
    deleteUser(req, res, next) {
        // vind de juiste User om te deleten
        const id = req.params.id
        console.log('deleteUser id = ' + id)

        // delete die User
        const removedUser = userlist.splice(id, 1)
        if(removedUser.length === 1) {
            // gelukt; status = 200
            res.status(200).json(removedUser).end();
        } else {
            // mislukt; fout -> next(error)
            let error = {
                message: "User was not found"
            }
            next(error)
        }
    },

    userLogin(req, res, next) {

        

    },

    getUserById(req, res, next) {

        let user = new User("Robin", "Schellius")
        res.status(200).json(user).end();
    },


}