const authModel = require('../models/auth.model')

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
  // if (!fName || !email || !password) return next({status: 400, {message: 'All fields need to be filled out'}})
  if (fName && email && password) {
    authModel.signup(fName, email, password)
      .then (results => {
        res.json(results)
      })
      .catch(err => next(err))
  }
}

module.exports = {
  login,
  signup
}
