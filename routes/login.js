// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", function (request, response) {
    response.render("login", {user: user.data})
})

// POST request handler
router.post("/", async function (request, response) {
    if (database.UserExists(request.body.username)) {
        try {
            const id = await database.GetUserID(request.body.username)
            const passwd = await database.GetPassByID(id[0]["id"])
            const role = await database.GetRole(id[0]["id"])
            if (request.body.password == passwd) {
                Object.assign(user.data, {id: id, username: request.body.username, role: role})
                response.redirect("/")
            }
            else console.log(`[Auth] Error: Password (${request.body.password}) did not match`)
        }
        catch(err) {
            console.log("[Auth] Error:", err)
        }
    }
})


// Exports
module.exports = router
