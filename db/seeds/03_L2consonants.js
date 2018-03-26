
exports.seed = function(knex, Promise) {
  return knex('L2consonants').del()
    .then(function() {
      return knex('L2consonants').insert([
        {id: 1, symbol: 'ㄱ', pronounciation: 'soft k or g', name: 'kee-yuhk'},
        {id: 2, symbol: 'ㄴ', pronounciation: 'n', name: 'knee-eun'},
        {id: 3, symbol: 'ㄷ', pronounciation: 'soft t or d', name: 'dee-geut'},
        {id: 4, symbol: 'ㄹ', pronounciation: 'luel', name: 'lee-eul'},
        {id: 5, symbol: 'ㅁ', pronounciation: 'm', name: 'mee-um'},
        {id: 6, symbol: 'ㅂ', pronounciation: 'soft b or p', name: 'be-eup'},
        {id: 7, symbol: 'ㅅ', pronounciation: 's', name: 'shee-ot'},
        {id: 8, symbol: 'ㅇ', pronounciation: 'ng as in "sing"', name: 'ee-eung'},
        {id: 9, symbol: 'ㅈ', pronounciation: 'soft ch or j', name: 'jee-eut'},
        {id: 10, symbol: 'ㅊ', pronounciation: 'ch', name: 'chi-eut'},
        {id: 11, symbol: 'ㅋ', pronounciation: 'aspirated k', name: 'khey-euk'},
        {id: 12, symbol: 'ㅌ', pronounciation: 'aspirated t', name: 'tee-eut'},
        {id: 13, symbol: 'ㅍ', pronounciation: 'aspirated p', name: 'phee-eup'},
        {id: 14, symbol: 'ㅎ', pronounciation: 'h', name: 'he-eut'},
        {id: 15, symbol: 'ㄲ', pronounciation: 'hard kk', name: 'ssang kee-yuhk'},
        {id: 16, symbol: 'ㄸ', pronounciation: 'hard tt', name: 'ssang dee-geut'},
        {id: 17, symbol: 'ㅃ', pronounciation: 'hard pp', name: 'ssang be-eup'},
        {id: 18, symbol: 'ㅆ', pronounciation: 'hard ss or sh', name: 'ssang shee-ot'},
        {id: 19, symbol: 'ㅉ', pronounciation: 'hard cch', name: 'ssang jee-eut'}
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('L2consonants_id_seq', (SELECT MAX(id) FROM L2consonants))`
      )
    })
}
