// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", function (request, response) {
    response.render("apply")
})


// Exports
module.exports = router