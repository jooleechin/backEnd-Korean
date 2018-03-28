const learnModel = require('../models/learn.model')

let everything = (req, res, next) => {
  learnModel.getAllLearn().then(learn => res.json({ learn }))
}

let one = (req, res, next) => {
  learnModel.getOneLearn(req.params.id).then(learn => res.json({ learn }))
}

module.exports = {
  everything,
  one
}
