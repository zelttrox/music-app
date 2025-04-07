// Import scripts
const database = require("../database/exec")

function AddSong(id, name, artist, music) {
    var query = "INSERT INTO songs (id, name, artist, music) VALUES (?, ?, ?, ?)"
    database.Exec(query, id, name, artist, music)
}