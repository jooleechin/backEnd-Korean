
exports.seed = function(knex, Promise) {
  return knex('combo').del()
    .then(function() {
      return knex('combo').insert([
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
        {id: 1, symbol: 'Pat', pronounciation: 'Coury', name: 'pourky@gmail.com'},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('combo_id_seq', (SELECT MAX(id) FROM combo))`
      )
    })
}
