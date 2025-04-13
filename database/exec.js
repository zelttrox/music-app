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
            return true
        }
        console.log("[DB] Successfully connected to the database!")
    })
}

function Disconnect() {
    database.end()
}

function Init() {
    var file_path = path.join(__dirname, "init.sql")
    var sql_script = fs.readFileSync(file_path, "utf-8")
    database.query(sql_script, function(err, output) {
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
            console.log("DB Error: ", err)
        }
        // console.log("[DB] Query executed successfully: ", output)
    })
}

function GetQuery(query, ...args) {
    return new Promise((resolve, reject) => {
        database.query(query, args, (err, output) => {
            if (err == null) {resolve(output)} 
            else {reject("[DB] ", err)}
        })
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
