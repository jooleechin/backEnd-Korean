
exports.seed = function(knex, Promise) {
  return knex('korean_dev').del()
    .then(() => knex('users').del())
}
