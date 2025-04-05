// Imports
const express = require("express")
const ejs = require("ejs")

// Define variables
const server = express()
const port = 3030

// Define routes
const songs_router = require("./routes/songs")

server.set("view engine", "ejs")

server.get("/", function (request, response) {
    response.render("index")
})

server.use("/songs", songs_router)

server.listen(port, function () {
    console.log("Server started on port", port)
})
