// Import dependencies
const express = require("express")
const ejs = require("ejs")

// Import scripts
const db = require("./database/controller")


// Define variables
const server = express()
const port = 3030

// Define routes
const browse_router = require("./routes/browse")

console.log("[Server]", "Starting server setup..")

// Set the render engine
server.set("view engine", "ejs")
console.log("[Server]", "EJS has been setup as view engine")

// Root handler
server.get("/", function (request, response) {
    response.render("index")
})

// Define static folder and routes
server.use(express.static("static"))
console.log("[Server]", "Static directory has been setup")
server.use("/browse", browse_router)
console.log("[Server]", "Using /browse route")

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
    console.log("[Server]", "Now listening..")
})
