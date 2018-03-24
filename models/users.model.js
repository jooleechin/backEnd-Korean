const knex = require('../db/knex')

class Users {
  constructor() {}

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
}

module.exports = Users
