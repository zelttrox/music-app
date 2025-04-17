// Import dependencies
const express = require("express")
const ejs = require("ejs")

// Import scripts
const database = require("./database/exec")
const dbctl = require("./database/controller")

// Define variables
const server = express()
const port = 3030

// Define routes
const browse_router = require("./routes/browse")

// Set the render engine
server.set("view engine", "ejs")

// Root handler
server.get("/", function (request, response) {
    response.render("index")
})

// Define static folder and routes
server.use(express.static("static"))
server.use("/browse", browse_router)

// Try to connect to the database
database.Connect()
database.Init()

dbctl.AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")
dbctl.AddSong("Heather", "Conan Gray", "./uploads/Heather.mp3")

database.GetQuery("SELECT * FROM songs")

// Start listening for connections
server.listen(port, function () {
    console.log("Server started on port", port)
})
