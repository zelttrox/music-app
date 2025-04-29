// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()

// TODO: Handle user/guest visit
// GET request handler
router.get("/", async function (request, response) {
    database.applies = await database.GetApplies()
    const applies = database.applies
    response.render("admin",  {user: user.data, applies: applies})       
})


// Exports
module.exports = router
