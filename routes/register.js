// Import scripts
const database = require("../database/controller")

// Import modules
const express = require("express")
const router = express.Router()

router.get("/", function (request, response) {
    response.render("register")
})

router.post("/reg", async function (request, response) {
    const {username, password} = req.body
    database.AddUser(username, password)
})

module.exports = router

