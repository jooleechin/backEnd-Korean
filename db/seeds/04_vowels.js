
exports.seed = function(knex, Promise) {
  return knex('vowels').del()
    .then(function() {
      return knex('vowels').insert([
        {id: 1, symbol: 'ㅏ', pronounciation: 'ah'},
        {id: 2, symbol: 'ㅑ', pronounciation: 'yah'},
        {id: 3, symbol: 'ㅓ', pronounciation: 'uh'},
        {id: 4, symbol: 'ㅕ', pronounciation: 'yuh'},
        {id: 5, symbol: 'ㅗ', pronounciation: 'oh'},
        {id: 6, symbol: 'ㅛ', pronounciation: 'yo'},
        {id: 7, symbol: 'ㅜ', pronounciation: 'oo'},
        {id: 8, symbol: 'ㅠ', pronounciation: 'yoo'},
        {id: 9, symbol: 'ㅡ', pronounciation: 'eu'},
        {id: 10, symbol: 'ㅣ', pronounciation: 'ee'},
        {id: 11, symbol: 'ㅐ', pronounciation: 'eh'},
        {id: 12, symbol: 'ㅒ', pronounciation: 'yeh'},
        {id: 13, symbol: 'ㅔ', pronounciation: 'eh'},
        {id: 14, symbol: 'ㅖ', pronounciation: 'yeh'},
        {id: 15, symbol: 'ㅘ', pronounciation: 'wah'},
        {id: 16, symbol: 'ㅙ', pronounciation: 'weh'},
        {id: 17, symbol: 'ㅚ', pronounciation: 'weh'},
        {id: 18, symbol: 'ㅝ', pronounciation: 'wuh'},
        {id: 19, symbol: 'ㅞ', pronounciation: 'weh'},
        {id: 20, symbol: 'ㅟ', pronounciation: 'wee'},
        {id: 21, symbol: 'ㅢ', pronounciation: 'eu-ee'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('vowels_id_seq', (SELECT MAX(id) FROM vowels))`
      )
    })
}
