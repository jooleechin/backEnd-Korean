const { Users } = require('../models')

class UsersController {
  constructor() {}

  static everything(req, res, next) {
    Users.all().then(users => res.json({ users }))
  }
  static one(req, res, next) {
    Users.one(req.params.id).then(users => res.json({ users }))
  }
  static signup(req, res, next) {
    Users.signup(req.body).then(users => res.json({ users }))
  }
  static edit(req, res, next) {
    Users.edit(req.params.id).then(users => res.json({ users }))
  }
  static erase(req, res, next) {
    Users.erase(req.params.id).then(users => res.json({ users }))
  }
}

module.exports = UsersController
