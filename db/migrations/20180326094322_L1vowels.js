
exports.up = function(knex, Promise) {
  return knex.schema.createTable('L1vowels', (t) => {
    t.increments()
    t.string('symbol').notNullable().defaultTo('')
    t.string('pronounciation').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('L1vowels')
};
