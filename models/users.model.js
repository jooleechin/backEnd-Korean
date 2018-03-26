const knex = require('../db/knex')
const bcrypt = require('bcryptjs')

class Users {
  static all() {
    return knex('users')
  }
  static one(id) {
    return knex('users')
      .where({ id })
      .first()
  }
  static signup(body) {
    return knex('users')
      .insert(body, '*')
      .then(([result]) => {
        return result
      })
  }
  static edit(id, body) {
    return knex('users')
      .where({id})
      .update(body, '*')
      .then(([result]) => {
        return result
      })
  }
  static erase(id) {
    return knex('users')
      .where({ id })
      .del()
      .returning('*')
      .then(([result]) => {
        return result
      })
  }
  static tryLoginUser(email, password) {
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
}

module.exports = Users
