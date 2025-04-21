// Import scripts
const database = require("../database/exec")
const auth = require("../src/auth")

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

        await AddUser("enzoo", "Linux1234!")
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
async function AddUser(username, password) {
return new Promise((resolve, reject) => {
    if (auth.IsUsernameValid(username) && auth.IsPasswordValid(password)) {
        console.log("[DB Controller] User", username, "is valid, adding to database..")
        const query = "INSERT INTO users (id, username, password, role) VALUES (?, ?, ?, ?)"
        const id = auth.GenerateID(username, 'user')
        console.log("[DB Controller]", username, "id: ", `(${id})`)
        database.Query(query, id, username, password, 'user')
        resolve()
    }
    else {
        console.log("[DB Controller] Error: Invalid credentials, unable to add user", `[${username}]`)
        reject()
    }
})}

async function UserExists(username) {
    const user = await database.GetQuery("SELECT * FROM users WHERE username = ?", username)
    return (user != null) ? true : false
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
}
