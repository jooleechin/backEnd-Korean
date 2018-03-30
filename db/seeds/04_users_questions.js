
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('users_questions').insert([
        {id: 1, user_id: '1', question_id: '1', is_correct: false, session: 0},
        {id: 2, user_id: '1', question_id: '2', is_correct: false, session: 1},
        {id: 3, user_id: '1', question_id: '3', is_correct: true, session: 0},
        {id: 4, user_id: '1', question_id: '4', is_correct: false, session: 1},
        {id: 5, user_id: '1', question_id: '5', is_correct: false, session: 2}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_questions_id_seq', (SELECT MAX(id) FROM users_questions))`
      )
    })
};
