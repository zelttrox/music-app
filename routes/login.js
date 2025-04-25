// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

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
            console.log(request.body.username, id)
            const passwd = await database.GetPassByID(id[0]["id"])
            if (request.body.password == passwd) {
                user.data = new user.User(request.body.username, id)
                console.log("user:", user.data)
            }
            else console.log(`[Auth] Error: Password (${request.body.password}) did not match ${passwd}`)
        }
        catch(err) {
            console.log("[Auth] Error:", err)
        }
    }
})

module.exports = router
