const knex = require('../db/knex')

function getAllLearn() {
  return knex('learn')
}

function getOneLearn(id) {
  return knex('learn')
    .where({ id })
    .first()
}


module.exports = {
  getAllLearn,
  getOneLearn
}
