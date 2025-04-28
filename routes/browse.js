// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// Set the browse page ID parameter
router.param("id", function (request, response, next, id) {
    const songs = database.songs
    if (!songs) return response.send("Songs database not available")
    request.song = songs[id]
    next()
})

// GET request handler
router.get("/", function (request, response) {
    const songs = database.songs
    response.render("browse", {user: user.data, songs: songs})
})

// Set route using ID parameter
router.route("/:id").get( function(request, response) {
    response.send(`Song: ${request.song.name} by ${request.song.artist}`)
})


// Exports
module.exports = router
