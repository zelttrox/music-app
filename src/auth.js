// Check if a provided username is valid using regex
function IsUsernameValid(username) {
    const regex = /^[a-zA-Z0-9_]+$/
    return (regex.test(username) && username.length <= 16) ? true : false
}

// Check if a provided password is valid using regex
function IsPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    return (regex.test(password) && password.length <= 64 && password.length >= 6) ? true : false
}

// Generate and return an ID based off user role, username and random
function GenerateID(username, role) {
    const prefix = role.toString().slice(0, 1).toLowerCase()
    const nick = username.slice(0, 2).toLowerCase()
    const uuid = Date.now()
    return `${prefix}-${nick}-${uuid}`
    // Should return something like this:
    // u-en-102982876387261
}


// Exports
module.exports = {
    IsUsernameValid,
    IsPasswordValid,
    GenerateID
}
