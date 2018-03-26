
exports.up = function(knex, Promise) {
  return knex.schema.createTable('learn', (t) => {
    t.increments()
    t.string('symbol').notNullable().defaultTo('')
    t.string('pronounciation').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('learn')
};
