function IsUsernameValid(username) {
    const regex = /^[a-zA-Z0-9_]+$/
    console.log("[Auth] Valid username:", regex.test(username))
    return (regex.test(username) && username.length <= 16) ? true : false
}

function IsPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    console.log("[Auth] Valid password:", regex.test(password))
    return (regex.test(password) && password.length <= 64 && password.length >= 6) ? true : false
}

function GenerateID(username, role) {
    const prefix = role.toString().slice(0, 1).toLowerCase()
    const nick = username.slice(0, 2).toLowerCase()
    const uuid = Date.now()
    return `${prefix}-${nick}-${uuid}`
    // Should return something like this:
    // u-en-102982876387261
}

module.exports = {
    IsUsernameValid,
    IsPasswordValid,
    GenerateID
}
