// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()

router.get("/", function (request, response) {
    response.render("login")
})

router.post("/", async function (request, response) {
    if (database.UserExists(request.body.username)) {
        try {
            const id = await database.GetUserID(request.body.username)
            const passwd = await database.GetPassByID(id)
            if (request.body.password == passwd) {
                user.data = new user.User(request.body.username, id)
            }
            else console.log(`[Auth] Error: Password (${request.body.password}) did not match`)
        }
        catch(err) {
            console.log("[Auth] Error:", err)
        }
    }
})

module.exports = router
