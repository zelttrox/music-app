// Import dependencies
const express = require("express")
const ejs = require("ejs")

// Import scripts
const database = require("./database/exec")
const controller = require("./database/controller")

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

async function SetupDatabase() {
    console.log("[DB] Attemtping to setup database..")
    try {
        await database.Connect()
        await database.Init()
        await controller.AddSong("Nostalgia", "Suki Waterhouse", "./uploads/Nostalgia.mp3")

        const data = await database.GetQuery("SELECT * FROM songs");
        console.log("SONGS:", data);
    } catch (err) {
        console.error(err);
    }
}

SetupDatabase();

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
    console.log("[Server]", "Now listening..")
})
