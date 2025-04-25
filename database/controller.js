// Import scripts
const database = require("../database/exec")

// Setup the database and add songs
async function Setup() {
    console.log("[DB Controller] Attemtping to setup database..")
    try {
        await database.Connect()
        await database.Init("users.sql")
        await database.Init("songs.sql")

        await AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")
        await AddSong("From The Start", "Laufey", "./uploads/From The Start.mp3")
        await AddSong("Sofia", "Clairo", "./uploads/Sofia.mp3")

        await AddUser("1", "tony", "Tonic1!")
    }
    catch (err) {
        console.error("[DB Controller] Error:", err);
        await database.Disconnect()
    }
}


// USER CONTROLLER
// <=============================================>
// Add a user to the database
// TODO: Also ask for email
// TODO: Email verificationw
async function AddUser(id, username, password) {
return new Promise((resolve, reject) => {
        const query = "INSERT INTO users (id, username, password, role) VALUES (?, ?, ?, ?)"
        console.log("[DB Controller]", username, "id: ", `(${id})`)
        database.Query(query, id, username, password, 'user')
        resolve()
    }
)}

async function UserExists(username) {
    try {
        const user = await database.GetQuery(`SELECT * FROM users WHERE username = '${username}'`)
        return (user && user.length > 0) ? true : false
    }
    catch (err) {
        console.log("[DB Controller] Error while checking if user exists:", err)
        return false
    }
}

async function GetUserID(username) {
    try {
        const id = await database.GetQuery(`SELECT id FROM users WHERE username = '${username}'`)
        return id
    }
    catch(err) {
        console.log("[DB Controller] Error while getting user ID:", err)
    }
}

async function GetPassByID(id) {
    console.log("id:", id)
    try {
        const passwd = await database.GetQuery(`SELECT password FROM users WHERE id = '${id}'`)
            console.log("passwd:", passwd)
            return passwd[0]["password"]
    }
    catch(err) {
        console.log("[DB Controller] Error while getting user password:", err)
    }
}
// <=============================================>


// SONGS CONTROLLER
// <=============================================>
// Add a song to the database
async function AddSong(name, artist, track) {
return new Promise((resolve, reject) => {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    console.log("[DB Controller] Adding song", id, "to the database..")
    database.Query(query, id, name, artist, track)
    resolve()
    })
}

var songs
// Return all the songs from the database
async function GetSongs() {
    console.log("[DB Controller] Attempting to get songs from database..")
    try {
        const data = await database.GetQuery("SELECT * FROM songs")
        return data
    }
    catch (err) {
        console.log("[DB Controller] Error:", err)
    }
}
// <=============================================>

    
module.exports = {
    Setup,
    GetSongs,
    songs,
    AddUser,
    UserExists,
    GetUserID,
    GetPassByID
}
