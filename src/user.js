var data = undefined


// Contain the data of the connected user
class User {
    username
    id
    // User object constructor
    constructor(username, id) {
        this.username = username
        this.id = id
    }
    // Getters
    getUsername() {return this.username}
    getID() {return this.id}
}


// Exports
module.exports = {
    User,
    data
}
