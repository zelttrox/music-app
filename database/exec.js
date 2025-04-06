// Imports
const mysql = require("mysql2");

// Setup connection with root user
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "duh",
    database: "database",
    port: 3232,
});

// Attempt connection to the database
function Connect() {
    database.connect((err) => {
        console.log("[DB] Attempting to connect to the database..")
        if (err != null) {
            console.error("[DB] Error connecting to the database: ", err)
            return
        }
        console.log("[DB] Successfully connected to the database!")
    })
}

function Disconnect() {

}

// Exports
module.exports = {
    ConnectDatabase: Connect,
    DisconnectDatabase: Disconnect,
}
