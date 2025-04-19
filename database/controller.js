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

async function GetSongs() {
    console.log("[DB] Attempting to get songs from database..")
    try {
        const data = await database.GetQuery("SELECT * FROM songs")
        return data
    }
    catch (err) {
        console.log("[DB] Error:", err)
    }
}

async function Setup() {
    console.log("[DB] Attemtping to setup database..")
    try {
        await database.Connect()
        await database.Init()

        await AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")
    } 
    catch (err) {
        console.error("[DB] Error:", err);
        await database.Disconnect()
    }
}

module.exports = {
    Setup,
    GetSongs,
}
