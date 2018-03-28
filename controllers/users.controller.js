const { Users } = require('../models')

const everything = (req, res, next) => {
  Users.all().then(users => res.json({ users }))
}
const one = (req, res, next) => {
  Users.one(req.params.id).then(user => res.json({ user }))
}
const quiz = (req, res, next) => {
  Users.quiz(req.params.id).then(quiz => res.json({ quiz }))
}
const signup = (req, res, next) => {
  Users.signup(req.body).then(user => res.json({ user }))
}
const edit = (req, res, next) => {
  Users.edit(req.params.id, req.body).then(user => res.json({ user }))
}
const erase = (req, res, next) => {
  Users.erase(req.params.id).then(user => res.json({ user }))
}

module.exports = {
  everything,
  one,
  quiz,
  signup,
  edit,
  erase
}
