const knex = require('../db/knex')
const bcrypt = require('bcryptjs')

let all = () => {
  return knex('users')
}
let one = (id) => {
  return knex('users')
    .where({ id })
    .first()
}
let quiz = (id) => {
  return knex('users_questions')
    .where("user_id", id)
    .where('is_correct', false)
    .innerJoin('questions', 'questions.id', 'users_questions.question_id')

}
let signup = (body) => {
  return knex('users')
    .insert(body, '*')
    .then(([result]) => {
      return result
    })
}
let edit = (id, body) => {
  return knex('users')
    .where({id})
    .update(body, '*')
    .then(([result]) => {
      return result
    })
}
let erase = (id) => {
  return knex('users')
    .where({ id })
    .del()
    .returning('*')
    .then(([result]) => {
      return result
    })
}
let tryLoginUser = (email, password) => {
  return knex('users')
    .select('password')
    .first()
    .where({ email })
    .then(result => {
      if (!result) {
        return false
      }
      return bcrypt.compare(password, result.password)
    })
}


let userinitQuestions = id => {
  return knex('questions')
    .then(questions => {
      let inserts = questions.map(question => ({
        user_id: id,
        question_id: question.id,
        is_correct: false
      }))
      return knex('users_questions').insert(inserts)
    })
}

let markQuestionCorrect = (user_id, question_id) => {
  return knex('users_questions')
     .where({user_id, question_id})
     .update({is_correct: true})
}

module.exports = {
  all,
  one,
  quiz,
  signup,
  edit,
  erase,
  tryLoginUser,
  userinitQuestions,
  markQuestionCorrect
}
