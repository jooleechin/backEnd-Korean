const router = require('express').Router()
const { authController } = require('../controllers')

router.post('login', authController.login)
router.post('signup', authController.signup)

module.exports = router

/*
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { jwtSignAsync } = require('./jsonWebTockenAsync')
const userClass = require('../models/users.model')

const user = new userClass()

const { TOKEN_SECRET } = process.env

router.user(bodyParser.json())

router.post('/', (req, res) => {
  let { email, password } = req.bodyParser
  if (!email || !password) {
    return res.status(401).json({error: {message: 'We need both the username and password please! :)'}})
  }

  if (user.tryLoginUser(email, password)) {
    return user.one(email)
    .then (result => {
      if (!result) {
        return res.status(403).json({error: {message: 'The username is invalid! :('}})
      } else {
        let payload = {
          loggedIn: true,
          sub: {
            id: result.id
          },
          exp: parseInt(Date.now() + 100000, 10)
        }
        let token
        jwtSignAsync(payload, TOKEN_SECRET)
        .then (result => {
          token = result
          return res.set('Auth', `Bearer: ${token}`).send('password matches, JWT set in Auth header')
        })
        .catch (err => {
          return res.status(403).json({error: {message: `${err}`}})
        })
      }
    })
  }
})

module.exports = router
*/
