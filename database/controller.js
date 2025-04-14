// Import scripts
const database = require("../database/exec")

function AddSong(name, artist, track) {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    database.Query(query, id, name, artist, track)
}

async function GetSongs() {
    var query = "SELECT * FROM songs"
    var result = await database.GetQuery(query)
        var songs = result
        return songs
}

module.exports = {
    AddSong,
    GetSongs
}
