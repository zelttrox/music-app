// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()



router.param("id", function (request, response, next, id) {
    const songs = database.songs
    if (!songs) return response.send("Sngs database not available")
    request.song = songs[id]
    next()
})

router.get("/", function (request, response) {
    response.render("browse")
})

router.route("/:id").get( function(request, response) {
    response.send(`Song: ${request.song.name} by ${request.song.artist}`)
})

// Exports
module.exports = router