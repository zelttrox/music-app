function IsUsernameValid(username) {
    const regex = /^[a-zA-Z0-9_]+$/
    return (regex.test(username) && username.length <= 16) ? true : false
}

function IsPasswordValid(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
    return (regex.test(password) && password.length <= 64 && password.length >= 6) ? true : false
}

module.exports = {
    IsUsernameValid,
    IsPasswordValid
}
