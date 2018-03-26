
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Q1vowels').del()
    .then(function () {
      // Inserts seed entries
      return knex('Q1vowels').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
    .then(() => {
      return knex.raw(
        `SELECT setval('Q1vowels_id_seq', (SELECT MAX(id) FROM Q1vowels))`
      )
    })
};
