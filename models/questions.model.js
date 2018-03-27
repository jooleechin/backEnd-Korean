const knex = require('../db/knex')

function getAllQuestions() {
  return knex('questions')
}

function getOneQuestion(id) {
  return knex('questions')
    .where({ id })
    .first()
}


module.exports = {
  getAllQuestions,
  getOneQuestion
}
