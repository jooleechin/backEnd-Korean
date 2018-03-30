
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_questions', (t) => {
    t.increments()
    t.integer('user_id').notNullable()
    t.foreign('user_id').references('users.id')
    t.integer('question_id').notNullable()
    t.foreign('question_id').references('questions.id')
    t.boolean('is_correct').notNullable().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_questions')
};
