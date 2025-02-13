const regExp = {
    fullName: /^(?:[A-Za-z]+)(?:\s[A-Za-z]+){1,2}(?:\s(?:[A-Za-z]+(?:[-'\s][A-Za-z]+)*))?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,15}$/
}

module.exports = {
    regExp
}