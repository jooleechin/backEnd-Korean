
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        {id: 1, fName: 'Pat', lName: 'Coury', email: 'pourky@gmail.com', password: 'addytab', progress: 99.9 },
        {id: 2, fName: 'Me', lName: 'You', email: 'meyou@gmail.com', password: 'meyoutwo', progress: 1 },
        {id: 3, fName: 'EggYo', lName: 'Plant', email: 'eggplant@gmail.com', password: 'eggybaby', progress: 4.2 }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
      )
    })
}
