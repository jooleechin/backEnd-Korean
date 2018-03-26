
exports.seed = function(knex, Promise) {
  return knex('vowels').del()
    .then(function() {
      return knex('vowels').insert([
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
        `SELECT setval('vowels_id_seq', (SELECT MAX(id) FROM vowels))`
      )
    })
}
