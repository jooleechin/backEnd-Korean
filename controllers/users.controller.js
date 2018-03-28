const { Users } = require('../models')

class UsersController {
  constructor() {}

  static everything(req, res, next) {
    Users.all().then(users => res.json({ users }))
  }
  static one(req, res, next) {
    Users.one(req.params.id).then(user => res.json({ user }))
  }
  static quiz(req, res, next) {
    Users.quiz(req.params.id).then(quiz => res.json({ quiz }))
  }
  static signup(req, res, next) {
    Users.signup(req.body).then(user => res.json({ user }))
  }
  static edit(req, res, next) {
    Users.edit(req.params.id, req.body).then(user => res.json({ user }))
  }
  static erase(req, res, next) {
    Users.erase(req.params.id).then(user => res.json({ user }))
  }
}

module.exports = UsersController
