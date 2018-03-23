
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments()
    t.string('fName').notNullable().defaultTo('')
    t.string('lName').notNullable().defaultTo('')
    t.string('email').notNullable().defaultTo('')
    t.string('password').notNullable().defaultTo('')
    t.integer('progress').notNullable().defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
