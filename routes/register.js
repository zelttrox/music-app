// Import scripts
const database = require("../database/controller")
const auth = require("../src/auth")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()

router.get("/", function (request, response) {
    response.render("register")
})

router.post("/", async function (request, response) {
    const user_exists = await UserExists(username)
    if (auth.IsUsernameValid(username) && auth.IsPasswordValid(password) && user_exists == false) {
        console.log("[DB Controller] User", username, "is valid, attempting to add to database..")
        try {
            const id = auth.GenerateID(username, 'user')
            await database.AddUser(request.body.username, request.body.password, id)
            user.data = new user.User(request.body.username, id)
            response.redirect("/")
        }
        catch(error) {
            console.log(`[Server] Error while registering: ${error}`)
        }
    }
    else {
        console.log(`[Auth] Error while registering: ${request.body.username} is not valid.`)
    }
})

module.exports = router
