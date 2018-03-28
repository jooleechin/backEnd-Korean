const questionsModel = require('../models/questions.model')

let everything = (req, res, next) => {
  questionsModel.getAllQuestions().then(questions => res.json({ questions }))
}

let one = (req, res, next) => {
  questionsModel.getOneQuestion(req.params.id).then(question => res.json({ question }))
}

module.exports = {
  everything,
  one
}
