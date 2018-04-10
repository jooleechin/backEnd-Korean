 const usersModel = require('../models/users.model')

let everything = (req, res, next) => {
  usersModel.all().then(users => res.json({ users }))
}
let one = (req, res, next) => {
  usersModel.one(req.params.id).then(user => res.json({ user }))
}
let quiz = (req, res, next) => {
  usersModel.quiz(req.params.id).then(quiz => {
    debugger
    res.json({ quiz })
  })
}
let signup = (req, res, next) => {
  usersModel.signup(req.body).then(user => res.json({ user }))
}
let edit = (req, res, next) => {
  usersModel.edit(req.params.id, req.body).then(user => res.json({ user }))
}
let erase = (req, res, next) => {
  usersModel.erase(req.params.id).then(user => res.json({ user }))
}

let markQuestionCorrect = (req, res, next) => {
  debugger
  let {user_id, question_id} = req.body
  usersModel.markQuestionCorrect(user_id, question_id).then(() => res.json({msg: 'question marked correct'}))
}

module.exports = {
  everything,
  one,
  quiz,
  signup,
  edit,
  erase,
  markQuestionCorrect
}
