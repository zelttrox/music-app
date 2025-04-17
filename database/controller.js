// Import scripts
const database = require("../database/exec")

function AddSong(name, artist, track) {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    console.log("[DB] Adding song", id, "to the database..")
    database.Query(query, id, name, artist, track)
}

function GetSongs() {
    query = "SELECT * FROM songs"
    output = database.GetQuery(query)
    return output
}

var songs

function InitDatabase() {
    database.Connect()
    database.Init()

    AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")
    AddSong("Heather", "Conan Gray", "./uploads/Heather.mp3")
    
    // songs = JSON.parse(GetSongs())
    console.log(GetSongs())
}

module.exports = {
    AddSong,
    GetSongs,
    InitDatabase,
    songs
}
