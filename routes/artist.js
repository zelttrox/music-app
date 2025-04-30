// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// Set the browse page song parameter
router.param("artist_name", function (request, response, next, artist_name) {
    const artists = database.artists
    if (!artists) return response.send("Couldn't find artist")
    request.artist = artists[artist_name]
    next()
})

// GET request handler
router.get("/", function (request, response) {
    response.render("artist", {user: user.data})
})

// Set route using artist name parameter
router.route("/:artist_name").get( function(request, response) {
    console.log(request.artist_name)
    response.send(`Artist: ${request.artist.artist_name} by ${request.artist_artist_name}`)
})


// Exports
module.exports = router
