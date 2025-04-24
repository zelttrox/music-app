// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()

router.get("/", function (request, response) {
    response.render("register")
})

router.post("/", async function (request, response) {
    try {
        await database.AddUser(request.body.username, request.body.password)
        response.redirect("/")
    }
    catch(error) {
        console.log(`[Server] Error while registering: ${error}`)
    }
})

module.exports = router

