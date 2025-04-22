// Import dependencies
const express = require("express")
const ejs = require("ejs")

// Import scripts
const database = require("./database/controller")

console.log("[Server]", "Starting server setup..")

// Define variables
const server = express()
const port = 3030

// Define routes
const browse_router = require("./routes/browse")
const login_router = require("./routes/login")
const register_router = require("./routes/register")

// Set the render engine
server.set("view engine", "ejs")
console.log("[Server]", "EJS has been set as view engine")

// Root handler
server.get("/", function (request, response) {
    response.render("index")
})

// Define static folder and routes
server.use(express.static("static"))
server.use(express.static("uploads"))
console.log("[Server]", "Static directory has been setup")
server.use("/browse", browse_router)
console.log("[Server]", "Using /browse route")
server.use("/login", login_router)
console.log("[Server]", "Using /login route")
server.use("/register", register_router)
console.log("[Server]", "Using /register route")

async function InitDatabase() {
    await database.Setup()
    database.songs = await database.GetSongs()
}

InitDatabase()

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
    console.log("[Server]", "Now listening..")
})
