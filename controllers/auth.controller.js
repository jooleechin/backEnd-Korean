const authModel = require('../models/auth.model')
const userModel = require('../models/users.model')
let login = (req, res, next) => {
  const { email, password } = req.body
  // if (!email || !password) return next({status: 400, {message: 'Email and password are required!'}})
  authModel.comparePass(email, password)
    .then(matches => {
      res.json({ matches })
    })
    .catch(e => next(e))
}

let signup = (req, res, next) => {
  let { fName, email, password } = req.body
  authModel.signup(fName, email, password)
    .then (results => {
      userModel.userinitQuestions(results[0].id)
      .then((users_questions) => {
        res.json(results)
      })
      .catch(err => {
        next(err)
      })
    })
    .catch(err => next(err))
}

module.exports = {
  login,
  signup
}
