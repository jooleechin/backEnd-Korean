
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        {id: 1, fName: 'Pat', email: 'pourky@gmail.com', password: 'addytab'},
        {id: 2, fName: 'Me', email: 'meyou@gmail.com', password: 'meyoutwo'},
        {id: 3, fName: 'EggYo', email: 'eggplant@gmail.com', password: 'eggybaby'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`
      )
    })
}
