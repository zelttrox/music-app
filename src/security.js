// Import modules
const bcrypt = require("bcrypt")

// Define common SQL instructions and identifiers
common = ["105", "105 OR 1=1", "\" or \"\"=\""]
identifiers = ["*", "'", "$", "=", ",", ";", "\""]

// Check if a given input is an injected SQL instruction using regex
function IsSQL(input) {
    input = input.toString()
    var is_sql = false
    common.forEach(expr => {if (input.includes(expr)) is_sql = true})
    identifiers.forEach(term => {if (input.includes(term)) is_sql = true})
    console.log("[Security] SQL Injection:", is_sql)
    return is_sql
}

// Return a hashed given password using bcrypt
async function HashPasswd(password) {
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

// Generate password salt using bcrypt
var salt
async function GenerateSalt() {salt = await bcrypt.genSalt()}
GenerateSalt()


// Exports
module.exports = {
    IsSQL,
    HashPasswd
}
