
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Q2consonants').del()
    .then(function () {
      // Inserts seed entries
      return knex('Q2consonants').insert([
        {id: 1, question: 'ㄱ', a: "soft k or g", b: "soft t or d", c: "soft ch or j", d: "hard kk", answer: "soft k or g"},
        {id: 2, question: 'ㄴ', a: "m", b: "n", c: "soft k or g", d: "hard tt", answer: "n"},
        {id: 3, question: 'ㄷ', a: "ch", b: "m", c: "soft t or d", d: "hard tt", answer: "soft t or d"},
        {id: 4, question: 'ㄹ', a: "luel", b: 'ng as in "sing"', c: "soft t or d", d: "aspirated t", answer: "luel"},
        {id: 5, question: 'ㅁ', a: "n", b: 'soft ch or j', c: "luel", d: "m", answer: "m"},
        {id: 6, question: 'ㅂ', a: "hard ss or sh", b: 'soft t or d', c: "soft b or p", d: "m", answer: "soft b or p"},
        {id: 7, question: 'ㅅ', a: "s", b: 'soft k or g', c: "h", d: "m", answer: "s"},
        {id: 8, question: 'ㅇ', a: "m", b: 'soft b or p', c: 'ng as in "sing"', d: "m", answer: 'ng as in "sing"'},
        {id: 9, question: 'ㅈ', a: "soft ch or j", b: 'n', c: 'hard ss or sh', d: "aspirated k", answer: 'soft ch or j'},
        {id: 10, question: 'ㅊ', a: "soft k or g", b: 'ch', c: 'soft ch or j', d: "aspirated p", answer: 'soft ch or j'},
        {id: 11, question: 'ㅋ', a: "s", b: 'aspirated p', c: 'soft b or p', d: "aspirated k", answer: 'aspirated k'},
        {id: 12, question: 'ㅌ', a: "aspirated t", b: 'soft t or d', c: 'soft b or p', d: "aspirated k", answer: 'aspirated t'},
        {id: 13, question: 'ㅍ', a: "soft k or g", b: 'soft b or p', c: 'luel', d: "aspirated p", answer: 'aspirated p'},
        {id: 14, question: 'ㅎ', a: "hard kk", b: 'ch', c: 'h', d: "soft t or d", answer: 'h'},
        {id: 15, question: 'ㄲ', a: "soft k or g", b: 'luel', c: 'hard kk', d: "soft ch or j", answer: 'hard kk'},
        {id: 16, question: 'ㄸ', a: "hard kk", b: 'hard tt', c: 'aspirated p', d: "soft t or d", answer: 'hard tt'},
        {id: 17, question: 'ㅃ', a: "hard pp", b: 'soft ch or j', c: 'aspirated p', d: "soft t or d", answer: 'hard pp'},
        {id: 18, question: 'ㅆ', a: "m", b: 'n', c: 'hard ss or sh', d: "soft t or d", answer: 'hard ss or sh'},
        {id: 19, question: 'ㅉ', a: "ch", b: 'hard cch', c: 'aspirated k', d: "hard kk", answer: 'hard cch'},


      ]);
    });
};


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
