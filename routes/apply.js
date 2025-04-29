// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", function (request, response) {
    response.render("apply", {user: user.data})
})

// POST request handler
router.post("/", async function (request, response) {
})


// Exports
module.exports = router