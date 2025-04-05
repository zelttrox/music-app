// Imports
const express = require("express")
const router = express.Router()

// Define Song class
class Song {
    constructor(name, artist, path) {
        this.name = name
        this.artist = artist
        this.path = path
        this.id = (`${this.name}-${this.artist}`).toLowerCase()
        console.log("Successfully added song with ID: ", this.id)
    }
}

// Songs array
// TODO: Replace this with an actual database
var songs = [
    new Song("Nostalgia", "Suki_Waterhouse", "./music/Nostalgia.mp3")
]

// /songs handler
router.get("/", function (request, response) {
    response.send("Songs")
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
        next()
    }
    else {
        response.send("Could not find song for ID")
    }
})

// Exports
module.exports = router
