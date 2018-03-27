const LearnModel = require('../models/learn.model')

let everything = (req, res, next) => {
  LearnModel.getAllLearn().then(learn => res.json({ learn }))
}

let one = (req, res, next) => {
  LearnModel.getOneLearn(req.params.id).then(learn => res.json({ learn }))
}

module.exports = {
  everything,
  one
}
