
exports.up = function(knex, Promise) {
  return knex.schema.createTable('q1vowels', (t) => {
    t.increments()
    t.string('question').notNullable().defaultTo('')
    t.string('a').notNullable().defaultTo('')
    t.string('b').notNullable().defaultTo('')
    t.string('c').notNullable().defaultTo('')
    t.string('d').notNullable().defaultTo('')
    t.string('answer').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('q1vowels')
};
