// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()

router.get("/", function (request, response) {
    response.render("login")
})

module.exports = router