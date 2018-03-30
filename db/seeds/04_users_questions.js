
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_questions').insert([
        {id: 1, user_id: '1', question_id: '1', is_correct: false},
        {id: 2, user_id: '1', question_id: '2', is_correct: false},
        {id: 3, user_id: '1', question_id: '3', is_correct: true},
        {id: 4, user_id: '1', question_id: '4', is_correct: false},
        {id: 5, user_id: '1', question_id: '5', is_correct: false}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_questions_id_seq', (SELECT MAX(id) FROM users_questions))`
      )
    })
};
