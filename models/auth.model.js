let knex = require('../db/knex')

let comparePass = (email, password) => {
  return knex('users')
  .where({
    'email': email,
    'password': password
  })
  .first()
  .then(result => {
    if (result) return result
    return false
  })
}

let signup = (fName, email, password) => {
  return knex('users')
  .insert({
    fName,
    email,
    password
  })
  .returning('*')
}

module.exports = {
  comparePass,
  signup
}

/*
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonWebTockenAsync')
const knex = require('../db/knex')
const { TOKEN_SECRET } = process.env || 'SUPER SECRET'
const SALTROUNDS = 10

function hashedUserPassword(user) {
  return bcrypt.hash(user.password, SALTROUNDS)
    .then(hash => {
      user.password = hash
      return user
    })
    .catch(e => {
      console.error(e);
    })
}

function comparePassword(user, password) {
  return bcrypt.compare(password, user.password)
}

function generateToken(email, secret=TOKEN_SECRET) {
  let token = jwt.sign(email, secret)
  return token
}

function verifyToken(token, secret=TOKEN_SECRET) {
  let decodedToken = jwt.verify(token, secret)
  return decodedToken
}

module.exports = {
  hashedUserPassword,
  comparePassword,
  generateToken,
  verifyToken
}
*/
