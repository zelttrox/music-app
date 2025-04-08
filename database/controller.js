// Import scripts
const { resolveInclude } = require("ejs")
const database = require("../database/exec")

function AddSong(name, artist, track) {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${this.name}-${this.artist}`).toLowerCase()
    database.Query(query, id, name, artist, track)
}

function GetSongs() {
    var query = "SELECT * FROM songs"
    var result = database.GetQuery(query)
        var songs = result
        return songs
}

module.exports = {
    AddSong,
    GetSongs
}