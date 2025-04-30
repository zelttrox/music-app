// Import scripts
const database = require("../database/controller")
const user = require("../src/user")
const server = require("../app")

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

// POST request handler when accepting an apply
router.post("/accept", async function (request, response) {
    try {
        const artist_name = database.GetArtistName()
        await database.Promote(request.body.apply_id, request.body.artist_name)
        await database.RemoveApply(request.body.apply_id)
        response.redirect("/admin")
    }
    catch(error) {
        console.log("[DB] Error:", error)
    }
})

// POST request handler when denying an apply
router.post("/deny", async function (request, response) {
    try {
        database.RemoveApply(request.body.apply_id)
        response.redirect("/admin")
    }
    catch(error) {
        console.log("[DB] Error:", error)
    }
})


// Exports
module.exports = router
