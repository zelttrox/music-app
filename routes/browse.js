// Imports
const express = require("express")
const router = express.Router()

// /songs handler
router.get("/", function (request, response) {
    response.render("browse", {songs: songs})
})

// Specific songs routes handler
// TODO: Use database requests instead of array
router.route("/:id").get( function(request, response) {
    console.log(request.song)
    response.send(`Song: ${request.song.name} by ${request.song.artist}`)
})
router.param("id", function (request, response, next, id) {
    var target = songs.find(function(song) {return song.id == id})
     if (target) {
         request.song = target
         next()    }
     else {
         response.send("Could not find song for Route: ", id)
     }
})

// Exports
module.exports = router
