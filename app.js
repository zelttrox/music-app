// Import dependencies
const express = require("express")
const ejs = require("ejs")

// Import scripts
const database = require("./database/exec")

// Define variables
const server = express()
const port = 3030

// Define routes
const songs_router = require("./routes/songs")
const ConnectDatabase = require("./database/exec")

// Set the render engine
server.set("view engine", "ejs")

// Root handler
server.get("/", function (request, response) {
    response.render("index")
})

// Define static folder and routes
server.use(express.static("static"))
server.use("/browse", songs_router)

// Try to connect to the database
database.Connect()

// Start listening for connections
server.listen(port, function () {
    console.log("Server started on port", port)
})
