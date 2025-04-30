// Contain the data of the connected user
var data = {
    username: "",
    id: "",
    role: '',
}

function Clear() {
    data.id = "0"
    data.username = "Guest"
    data.role = 'guest'
}


// Exports
module.exports = {
    data,
    Clear
}
