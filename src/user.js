class User {

    username
    id

    constructor(username, id) {
        this.username = username
        this.id = id
    }

    getUsername() {return this.username}
    getID() {return this.id}
}

var data = undefined

module.exports = {
    User,
    data
}
