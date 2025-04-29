// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", function (request, response) {
    response.render("profile", {user: user.data})
})

// POST request handler
router.post("/logout", function (request, response) {
    console.log("[Auth] User is now logged out")
    user.Clear()
    response.redirect("/")
})


module.exports = router
