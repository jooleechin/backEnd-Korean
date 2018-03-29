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
  return knex('users')
    .join('users_questions', 'users.id', '=', 'users_questions.user_id')
    .where('is_correct', false)

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
/*
t.increments()
t.integer('user_id').notNullable()
t.foreign('user_id').references('users.id')
t.integer('question_id').notNullable()
t.foreign('question_id').references('questions.id')
t.boolean('isCorrect').notNullable().defaultTo(false)
t.integer('session').notNullable().defaultsTo(0)
*/

let userinitQuestions = id => {
  return knex('questions')
    .then(questions => {
      let inserts = questions.map(question => ({
        user_id: id,
        question_id: question.id,
        is_correct: false,
        session: 0
      }))
      return knex('users_questions').insert(inserts)
    })
}

module.exports = {
  all,
  one,
  quiz,
  signup,
  edit,
  erase,
  tryLoginUser,
  userinitQuestions
}
