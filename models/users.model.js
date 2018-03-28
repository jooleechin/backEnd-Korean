const knex = require('../db/knex')
const bcrypt = require('bcryptjs')

let all = () => {
  return knex('users')
}
let one = (id) => {
  return knex('users')
    .where({ id })
    .first()
} 
let signup = (body) => {
  return knex('users')
    .insert(body, '*')
    .then(([result]) => {
      return result
    })
}
let edit = (id, body) => {
  return knex('users')
    .where({id})
    .update(body, '*')
    .then(([result]) => {
      return result
    })
}
let erase = (id) => {
  return knex('users')
    .where({ id })
    .del()
    .returning('*')
    .then(([result]) => {
      return result
    })
}
let tryLoginUser = (email, password) => {
  return knex('users')
    .select('password')
    .first()
    .where({ email })
    .then(result => {
      if (!result) {
        return false
      }
      return bcrypt.compare(password, result.password)
    })
}

module.exports = {
  all,
  one,
  signup,
  edit,
  erase,
  tryLoginUser
}
