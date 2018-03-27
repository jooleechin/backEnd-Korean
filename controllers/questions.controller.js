const QuestionsModel = require('../models/questions.model')

let everything = (req, res, next) => {
  QuestionsModel.getAllQuestions().then(questions => res.json({ questions }))
}

let one = (req, res, next) => {
  QuestionsModel.getOneQuestion(req.params.id).then(question => res.json({ question }))
}

module.exports = {
  everything,
  one
}
