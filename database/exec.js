// Import modules
const mysql = require("mysql2");
const fs = require("fs")
const path = require("path");


// Setup database connection with root user
const database = mysql.createConnection({
    host: "db",
    user: "root",
    password: "duh",
    database: "music_db",
    port: 3306,
});


// Connect to the database
function Connect() {
return new Promise((resolve, reject) => {
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

// Disconnect from the database
function Disconnect() {
return new Promise((resolve, reject) => {
   database.end((err) => {
   if (err != null) {
      console.log("[DB] Successfully disconnected from the database!")
      resolve()
   }
   else reject()
   })
})}

// Initialize a table using SQL instructions
function Init(table) {
return new Promise((resolve, reject) => {
var file_path = path.join(__dirname, table)
    var sql_script = fs.readFileSync(file_path, "utf-8")
    database.query(sql_script, function (err, output) {
        if (err != null) {
            console.log("[DB] Error while initializing table:", `(${table})`, err)
            reject()
        }
        else {
            console.log("[DB] Successfully initialized table:", `(${table})`)
            resolve()
        }
    })
})}


// Send a query to the database
function Query(query, ...args) {
return new Promise((resolve, reject) => {
   database.query(query, args, (err) => {
      if (err != null) {
         console.log("[DB] Error while executing database with query: ", query, "Error:", err)
         reject()
      }
      else resolve()
   })
})}

// Send a get query to the database and return it's output
function GetQuery(query) {
return new Promise((resolve, reject) => {
   database.query(query, (err, output) => {
      if (err != null) {
         console.log("[DB] Error while get querying database with query: ", query, "Error:", err)
         reject(err)
      }
      else resolve(output)
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
