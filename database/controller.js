// Import scripts
const database = require("../database/exec")


async function AddSong(name, artist, track) {
return new Promise((reslove, reject) => {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    console.log("[DB] Adding song", id, "to the database..")
    database.Query(query, id, name, artist, track)
    reslove()
    })

}

module.exports = {
    AddSong,
}
