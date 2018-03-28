const authModel = require('../models/auth.model')

let login = (req, res, next) => {
  const { email, password } = req.body
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
      res.json(results)
    })
    .catch(err => next(err))
}

module.exports = {
  login,
  signup
}
