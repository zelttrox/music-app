// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// Set the browse page song parameter
router.param("artist_name", async function (request, response, next, artist_name) {
    var artists = await database.GetArtists()
    if (!artists) return response.send("Couldn't find artist")
    request.artist = artists.find((artist) => artist.artist_name == artist_name)
    if (!request.artist) return response.send("Artist not found")
    next()
})

// GET request handler
router.get("/", function (request, response) {
    response.render("artist", {user: user.data})
})

// Set route using artist name parameter
router.route("/:artist_name").get( function(request, response) {
    response.send(`Artist: ${request.artist.artist_name}`)
})


// Exports
module.exports = router
