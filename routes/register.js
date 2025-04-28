// Import scripts
const database = require("../database/controller")
const auth = require("../src/auth")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", function (request, response) {
    response.render("register", {user: user.data})
})

// POST request handler
router.post("/", async function (request, response) {
    const user_exists = await database.UserExists(request.body.username)
    if (auth.IsUsernameValid(request.body.username) && auth.IsPasswordValid(request.body.password) && user_exists == false) {
        console.log("[Auth] User", request.body.username, "is valid, attempting to add to database..")
        try {
            const id = auth.GenerateID(request.body.username, 'user')
            await database.AddUser(id, request.body.username, request.body.password)
            Object.assign(user.data, {id: id, username: request.body.username})
            response.redirect("/")
        }
        catch(err) {
            console.log(`[Server] Error while registering: ${err}`)
        }
    }
    else {
        console.log(`[Auth] Error while registering: ${request.body.username} is not valid.`)
    }
})


// Exports
module.exports = router
