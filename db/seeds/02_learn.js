
exports.seed = function(knex, Promise) {
  return knex('learn').del()
    .then(function() {
      return knex('learn').insert([
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
        {id: 21, symbol: 'ㅢ', pronounciation: 'eu-ee'},
        {id: 22, symbol: 'ㄱ', pronounciation: 'soft k or g'},
        {id: 23, symbol: 'ㄴ', pronounciation: 'n'},
        {id: 24, symbol: 'ㄷ', pronounciation: 'soft t or d'},
        {id: 25, symbol: 'ㄹ', pronounciation: 'luel'},
        {id: 26, symbol: 'ㅁ', pronounciation: 'm'},
        {id: 27, symbol: 'ㅂ', pronounciation: 'soft b or p'},
        {id: 28, symbol: 'ㅅ', pronounciation: 's'},
        {id: 29, symbol: 'ㅇ', pronounciation: 'ng as in "sing"'},
        {id: 30, symbol: 'ㅈ', pronounciation: 'soft ch or j'},
        {id: 31, symbol: 'ㅊ', pronounciation: 'ch'},
        {id: 32, symbol: 'ㅋ', pronounciation: 'aspirated k'},
        {id: 33, symbol: 'ㅌ', pronounciation: 'aspirated t'},
        {id: 34, symbol: 'ㅍ', pronounciation: 'aspirated p'},
        {id: 35, symbol: 'ㅎ', pronounciation: 'h'},
        {id: 36, symbol: 'ㄲ', pronounciation: 'hard kk'},
        {id: 37, symbol: 'ㄸ', pronounciation: 'hard tt'},
        {id: 38, symbol: 'ㅃ', pronounciation: 'hard pp'},
        {id: 39, symbol: 'ㅆ', pronounciation: 'hard ss or sh'},
        {id: 40, symbol: 'ㅉ', pronounciation: 'hard cch'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('learn_id_seq', (SELECT MAX(id) FROM learn))`
      )
    })
}
