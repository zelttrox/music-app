// Imports
const mysql = require("mysql2");
const fs = require("fs")
const path = require("path")

// Setup connection with root user
const database = mysql.createConnection({
    host: "db",
    user: "root",
    password: "duh",
    database: "music_db",
    port: 3306,
});

// Attempt connection to the database
function Connect() {
    database.connect((err) => {
        console.log("[DB] Attempting to connect to the database..")
        if (err != null) {
            console.error("[DB] Error connecting to the database: ", err)
        }
        else {
            console.log("[DB] Successfully connected to the database!")
        }
    })
}

function Disconnect() {
    database.end()
    console.log("[DB] Successfully disconnected database!")
}

function Init() {
    var file_path = path.join(__dirname, "init.sql")
    var sql_script = fs.readFileSync(file_path, "utf-8")
    database.query(sql_script, function (err, output) {
        if (err != null) {
            console.log("[DB] Error while initializing database: ", err)
            return
        }
        else {
            console.log("[DB] Successfully initialized the database!")
        }
    })
}

function Query(query, ...args) {
    database.query(query, args, (err) => {
        if (err != null) {
            console.log("[DB] Error while executing database with query: ", query)
            console.log("[DB] ", err)
        }
    })
}

function GetQuery(query) {
    database.query(query, (err, output) => {
        if (err != null) {
            console.log("[DB] Error while get querying database with query: ", query)
            console.log(["DB: ", err])
        }
        return output
    })
}

// Exports
module.exports = {
    Connect,
    Disconnect,
    Init,
    Query,
    GetQuery,
}
