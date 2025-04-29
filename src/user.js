// Contain the data of the connected user
var data = {
    username: "",
    id: ""
}

function Clear() {
    data.id = "0"
    data.username = "Guest"
}


// Exports
module.exports = {
    data,
    Clear
}
