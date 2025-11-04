// Contain the data of the connected user
var data = {
    username: "",
    id: "",
    role: '',
    artist_name: ''
}

function Clear() {
    data.id = "0"
    data.username = "Guest"
    data.role = 'guest'
    data.artist_name = ''
}


// Exports
module.exports = {
    data,
    Clear
}
