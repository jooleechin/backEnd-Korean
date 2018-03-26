
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(() => knex('l1vowels').del())
    .then(() => knex('l2consonants').del())
    .then(() => knex('q1vowels').del())
    .then(() => knex('q2consonants').del())
    .then(() => knex('q3combo').del())
}
