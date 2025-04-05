const express = require("express")
const router = express.Router()

class Song {
    constructor(name, artist, path) {
        this.name = name
        this.artist = artist
        this.path = path
        this.id = (`${this.name}-${this.artist}`).toLowerCase()
        console.log("Successfully added song with ID: ", this.id)
    }
}

var songs = [
    new Song("Nostalgia", "Suki_Waterhouse", "./music/Nostalgia.mp3")
]

router.get("/", function (request, response) {
    response.send("Songs")
})

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

module.exports = router
