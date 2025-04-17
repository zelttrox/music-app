// Import scripts
const database = require("../database/exec")

function AddSong(name, artist, track) {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    console.log("[DB] Adding song", id, "to the database..")
    database.Query(query, id, name, artist, track)
}

module.exports = {
    AddSong
}
