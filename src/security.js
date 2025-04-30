// Define common SQL instructions and identifiers
common = ["105", "105 OR 1=1", "\" or \"\"=\""]
identifiers = ["*", "'", "$", "=", ",", ";", "\""]

// Check if a given input is an injected SQL instruction using regex
function IsSQL(input) {
    input = input.toString()
    common.forEach(expr => {if (input.includes(expr)) return true})
    identifiers.forEach(term => {if (input.includes(term)) return true})
    console.log("[Security] No SQL injection detected")
    return false
}


// Exports
module.exports = {
    IsSQL
}
