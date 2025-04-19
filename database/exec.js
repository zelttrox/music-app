// Imports
const mysql = require("mysql2");
const fs = require("fs")
const path = require("path");

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
return new Promise((resolve, reject) => {
    console.log("[DB] Attempting to connect to the database..")
    database.connect((err) => {
        if (err != null) {
            console.error("[DB] Error connecting to the database: ", err)
            reject(err)
        } 
        else {
            console.log("[DB] Successfully connected to the database!")
            resolve()
        }
    })
})}

// Disconnect the database
function Disconnect() {
return new Promise((resolve, reject) => {
   database.end((err) => {
   if (err != null) {
      console.log("[DB] Successfully disconnected database!")
      resolve()
   }
   else reject()
   })
})}

// Initialize database using SQL instructions
function Init() {
return new Promise((resolve, reject) => {
var file_path = path.join(__dirname, "init.sql")
    var sql_script = fs.readFileSync(file_path, "utf-8")
    database.query(sql_script, function (err, output) {
        if (err != null) {
            console.log("[DB] Error while initializing database: ", err)
            reject()
        }
        else {
            console.log("[DB] Successfully initialized the database!")
            resolve()
        }
    })
})}

// Attempt to query database
function Query(query, ...args) {
return new Promise((resolve, reject) => {
   database.query(query, args, (err) => {
      if (err != null) {
         console.log("[DB] Error while executing database with query: ", query)
         console.log("[DB] ", err)
         reject()
      }
      else resolve()
   })
})}

// Attempt to get data from the database
function GetQuery(query) {
return new Promise((resolve, reject) => {
   database.query(query, (err, output) => {
      if (err != null) {
         console.log("[DB] Error while get querying database with query: ", query)
         console.log(["DB: ", err])
         reject(err)
      }
      else resolve(output)
      console.log(output)
    })
})}

// Exports
module.exports = {
    Connect,
    Disconnect,
    Init,
    Query,
    GetQuery,
}