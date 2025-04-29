// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", async function (request, response) {
        response.render("admin",  {user: user.data})
})


// Exports
module.exports = router
