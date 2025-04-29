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
    if (user.username != "Guest") {
        try {
        database.AddApply(
            user.data.username, user.data.id,
            request.body.pro_mail,
            request.body.label,
            request.body.tunecore,
            request.body.copyrights
            ) 
        }
        catch(error) {
            console.log(`[DB] Error while adding apply: ${error}`)
        }
    }
    else response.redirect("/login")
})


// Exports
module.exports = router
