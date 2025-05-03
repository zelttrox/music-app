// Import scripts
const database = require("../database/controller")
const user = require("../src/user")

// Import modules
const express = require("express")
const router = express.Router()


// GET request handler
router.get("/", async function (request, response) {
    if (user.data.role[0]["role"] != 'admin') return response.redirect("/")
    database.applies = await database.GetApplies()
    const applies = database.applies
    response.render("admin",  {user: user.data, applies: applies})       
})

// POST request handler when accepting an apply
router.post("/accept", async function (request, response) {
    try {
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
