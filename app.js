// Import scripts
const database = require("./database/controller")
const user = require("./src/user")

// Import modules
const express = require("express")
const ejs = require("ejs")

// Define server variables
const server = express()
const port = 3030

// Define routes
const browse_router = require("./routes/browse")
const login_router = require("./routes/login")
const register_router = require("./routes/register")

// Define parsing middlewares
server.use(express.urlencoded({extended: true}))
server.use(express.json())

// Set render engine
server.set("view engine", "ejs")

// Define static folder
server.use(express.static("static"))
server.use(express.static("uploads"))

// Root GET request handler
server.get("/", function (request, response) {
    const username = user.data.getUsername()
    response.render("index", {username: username})
})

// Define routes
server.use("/browse", browse_router)
console.log("[Server]", "Using /browse route")
server.use("/login", login_router)
console.log("[Server]", "Using /login route")
server.use("/register", register_router)
console.log("[Server]", "Using /register route")

// Initialize the MySQL database
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
