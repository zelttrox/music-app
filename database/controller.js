// Import scripts
const database = require("../database/exec")
const user = require("../src/user")


// Setup the database and add songs and users
async function Setup() {
    try {
        await database.Connect()
        await database.Init("users.sql")
        await database.Init("songs.sql")
        await database.Init("applies.sql")

        await AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")
        await AddSong("From The Start", "Laufey", "./uploads/From The Start.mp3")
        await AddSong("Sofia", "Clairo", "./uploads/Sofia.mp3")

        await AddUser("a0", "admin0", "0192837465", 'admin')
    }
    catch (err) {
        console.error("[DB Controller] Error:", err);
        await database.Disconnect()
    }
}


// Add a user to the database
// TODO: Also ask for email
// TODO: Email verificationw
async function AddUser(id, username, password, role = 'user') {
return new Promise((resolve, reject) => {
        const query = "INSERT INTO users (id, username, password, role) VALUES (?, ?, ?, ?)"
        console.log(`[DB] Added user ${username} with id ${id}`)
        database.Query(query, id, username, password, role)
        resolve()
    }
)}


// Check if a user exists in the users table
async function UserExists(username) {
    try {
        const user = await database.GetQuery(`SELECT * FROM users WHERE username = '${username}'`)
        return (user && user.length > 0) ? true : false
    }
    catch (err) {
        console.log("[DB] Error while checking if user exists:", err)
        return false
    }
}

// Check if a user has admin role using it's ID
async function IsAdmin(id) {
    try {
        if (user.data.username == "Guest") return false
        const role = await database.GetQuery(`SELECT role FROM users where id = '${id}'`)
        return (role == 'amdin') ? true : false
    }
    catch(error) {
        console.log(`[DB] Error while checking privileges: ${error}`)
    }
}

// Return the ID of a user using it's username
async function GetUserID(username) {
    try {
        const id = await database.GetQuery(`SELECT id FROM users WHERE username = '${username}'`)
        return id
    }
    catch(err) {
        console.log("[DB] Error while getting user ID:", err)
    }
}

// Return the password of a user using it's ID
async function GetPassByID(id) {
    try {
        const passwd = await database.GetQuery(`SELECT password FROM users WHERE id = '${id}'`)
            return passwd[0]["password"]
    }
    catch(err) {
        console.log("[DB] Error while getting user password:", err)
    }
}

// Return the role of a user using it's ID
async function GetRole(id) {
    try {
    return await database.GetQuery(`SELECT role FROM users WHERE id = '${id}'`)
    }
    catch(error) {
        console.log("[DB] Error while getting user role:", error)
    }
}


// Add a song to the database
// TODO: artist property should redirect to a user with artist role
async function AddSong(name, artist, track) {
return new Promise((resolve, reject) => {
    var query = "INSERT INTO songs (id, name, artist, track) VALUES (?, ?, ?, ?)"
    var id = (`${name}-${artist}`).toLowerCase()
    id = id.replace(" ", "-")
    console.log(`[DB] Adding song ${id} to the database`)
    database.Query(query, id, name, artist, track)
    songs = GetSongs()
    resolve()
    })
}

// Return all the songs from the database
var songs
async function GetSongs() {
    try {
        const data = await database.GetQuery("SELECT * FROM songs")
        return data
    }
    catch(error) {
        console.log("[DB] Error while getting songs:", error)
    }
}


// Add a new artist apply request to the database
async function AddApply(username, user_id, pro_mail, label, tunecore, copyrights) {
    return new Promise((resolve, reject) => {
        var query = "INSERT INTO applies (username, user_id, pro_mail, label, tunecore, copyrights) VALUES (?, ?, ?, ?, ?, ?)"
        console.log(`[DB] Adding apply for (${username} | ${pro_mail})`)
        database.Query(query, username, user_id, pro_mail, label, tunecore, copyrights)
        resolve()
        })
}

// Return all the artist applies from the database
var applies
async function GetApplies() {
    try {
        return await database.GetQuery(`SELECT * FROM applies`)
    }
    catch(error) {
        console.log("[DB] Error while getting applies:", error)
    }
}

// Exports
module.exports = {
    Setup,
    GetSongs,
    songs,
    AddUser,
    UserExists,
    IsAdmin,
    GetUserID,
    GetPassByID,
    GetRole,
    AddApply,
    GetApplies,
    applies
}
