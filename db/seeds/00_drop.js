
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('learn').del())
    .then(() => knex('questions').del())
    .then(() => knex('users_questions').del())
}
