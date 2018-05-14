// module.exports = {}

class User {

    constructor(firstname, lastname, email, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        
    }

    getfirstname(){
        return this.firstname;
    }
}

module.exports = User;