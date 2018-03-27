
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'ㅏ', a: "uh", b: "ah", c: "weh", d: "oo", answer: "ah"},
        {id: 2, question: 'ㅑ', a: "yah", b: "ah", c: "wee", d: "eu-ee", answer: "yah"},
        {id: 3, question: 'ㅓ', a: "wah", b: "ah", c: "yoo", d: "uh", answer: "uh"},
        {id: 4, question: 'ㅕ', a: "wee", b: "yah", c: "yuh", d: "uh", answer: "yuh"},
        {id: 5, question: 'ㅗ', a: "oh", b: "oo", c: "eh", d: "ah", answer: "oh"},
        {id: 6, question: 'ㅛ', a: "oh", b: "yo", c: "yoo", d: "weh", answer: "yo"},
        {id: 7, question: 'ㅜ', a: "yah", b: "ah", c: "yoo", d: "oo", answer: "oo"},
        {id: 8, question: 'ㅠ', a: "yoo", b: "oo", c: "eh", d: "yah", answer: "yoo"},
        {id: 9, question: 'ㅡ', a: "yah", b: "ah", c: "wee", d: "eu", answer: "eu"},
        {id: 10, question: 'ㅣ', a: "wah", b: "ah", c: "eu", d: "ee", answer: "ee"},
        {id: 11, question: 'ㅐ', a: "eh", b: "ah", c: "yah", d: "oo", answer: "eh"},
        {id: 12, question: 'ㅒ', a: "yah", b: "oo", c: "yeh", d: "weh", answer: "yeh"},
        {id: 13, question: 'ㅔ', a: "oh", b: "yoo", c: "weh", d: "eh", answer: "eh"},
        {id: 14, question: 'ㅖ', a: "yeh", b: "yah", c: "eh", d: "weh", answer: "yeh"},
        {id: 15, question: 'ㅘ', a: "wah", b: "ah", c: "ee", d: "oo", answer: "wah"},
        {id: 16, question: 'ㅙ', a: "yah", b: "weh", c: "wah", d: "eu-ee", answer: "weh"},
        {id: 17, question: 'ㅚ', a: "wah", b: "ah", c: "weh", d: "eu-ee", answer: "weh"},
        {id: 18, question: 'ㅝ', a: "yoo", b: "wee", c: "weh", d: "wuh", answer: "wuh"},
        {id: 19, question: 'ㅞ', a: "yoo", b: "oo", c: "weh", d: "wah", answer: "weh"},
        {id: 20, question: 'ㅟ', a: "wah", b: "oo", c: "weh", d: "wee", answer: "wee"},
        {id: 21, question: 'ㅢ', a: "eu-ee", b: "wee", c: "wuh", d: "wah", answer: "eu-ee"},
        {id: 22, question: 'ㄱ', a: "soft k or g", b: "soft t or d", c: "soft ch or j", d: "hard kk", answer: "soft k or g"},
        {id: 23, question: 'ㄴ', a: "m", b: "n", c: "soft k or g", d: "hard tt", answer: "n"},
        {id: 24, question: 'ㄷ', a: "ch", b: "m", c: "soft t or d", d: "hard tt", answer: "soft t or d"},
        {id: 25, question: 'ㄹ', a: "luel", b: 'ng as in "sing"', c: "soft t or d", d: "aspirated t", answer: "luel"},
        {id: 26, question: 'ㅁ', a: "n", b: 'soft ch or j', c: "luel", d: "m", answer: "m"},
        {id: 27, question: 'ㅂ', a: "hard ss or sh", b: 'soft t or d', c: "soft b or p", d: "m", answer: "soft b or p"},
        {id: 28, question: 'ㅅ', a: "s", b: 'soft k or g', c: "h", d: "m", answer: "s"},
        {id: 29, question: 'ㅇ', a: "m", b: 'soft b or p', c: 'ng as in "sing"', d: "m", answer: 'ng as in "sing"'},
        {id: 30, question: 'ㅈ', a: "soft ch or j", b: 'n', c: 'hard ss or sh', d: "aspirated k", answer: 'soft ch or j'},
        {id: 31, question: 'ㅊ', a: "soft k or g", b: 'ch', c: 'soft ch or j', d: "aspirated p", answer: 'soft ch or j'},
        {id: 32, question: 'ㅋ', a: "s", b: 'aspirated p', c: 'soft b or p', d: "aspirated k", answer: 'aspirated k'},
        {id: 33, question: 'ㅍ', a: "soft k or g", b: 'soft b or p', c: 'luel', d: "aspirated p", answer: 'aspirated p'},
        {id: 34, question: 'ㅎ', a: "hard kk", b: 'ch', c: 'h', d: "soft t or d", answer: 'h'},
        {id: 35, question: 'ㄲ', a: "soft k or g", b: 'luel', c: 'hard kk', d: "soft ch or j", answer: 'hard kk'},
        {id: 36, question: 'ㄸ', a: "hard kk", b: 'hard tt', c: 'aspirated p', d: "soft t or d", answer: 'hard tt'},
        {id: 37, question: 'ㅃ', a: "hard pp", b: 'soft ch or j', c: 'aspirated p', d: "soft t or d", answer: 'hard pp'},
        {id: 38, question: 'ㅆ', a: "m", b: 'n', c: 'hard ss or sh', d: "soft t or d", answer: 'hard ss or sh'},
        {id: 39, question: 'ㅉ', a: "ch", b: 'hard cch', c: 'aspirated k', d: "hard kk", answer: 'hard cch'},
        {id: 40, question: '가', a: "gah", b: "bah", c: "buh", d: "gyah", answer: "gah"},
        {id: 41, question: '부', a: "bah", b: "boo", c: "suh", d: "peh", answer: "boo"},
        {id: 42, question: '너', a: "teh", b: "goh", c: "nah", d: "nuh", answer: "nuh"},
        {id: 43, question: '미', a: "teh", b: "geu", c: "mee", d: "nee", answer: "mee"},
        {id: 44, question: '하', a: "tah", b: "gah", c: "bah", d: "hah", answer: "hah"},
        {id: 45, question: '도', a: "doh", b: "dah", c: "bah", d: "beh", answer: "doh"},
        {id: 46, question: '차', a: "doh", b: "doo", c: "chah", d: "jah", answer: "chah"},
        {id: 47, question: '봐', a: "bwah", b: "kwah", c: "nwah", d: "hwah", answer: "bwah"},
        {id: 48, question: '로', a: "lah", b: "bah", c: "loh", d: "goh", answer: "loh"},
        {id: 49, question: '리', a: "lee", b: "leu", c: "loh", d: "lah", answer: "lee"},
        {id: 50, question: '데', a: "deh", b: "beh", c: "geh", d: "meh", answer: "deh"},
        {id: 51, question: '빠', a: "sah", b: "ppah", c: "suh", d: "ppuh", answer: "ppah"},
        {id: 52, question: '사', a: "soo", b: "soh", c: "suh", d: "sah", answer: "sah"},
        {id: 53, question: '여', a: "yuh", b: "yah", c: "wah", d: "weh", answer: "yuh"},
        {id: 54, question: '쟈', a: "jwah", b: "jyah", c: "jah", d: "jeh", answer: "jyah"},
        {id: 55, question: "쿼", a: "kwuh", b: "kwah", c: "kwee", d: "kweh", answer: "kwuh"},
        {id: 56, question: "패", a: "pyeh", b: "peh", c: "poh", d: "pah", answer: "peh"},
        {id: 57, question: "트", a: "teu", b: "tee", c: "tyoo", d: "tweh", answer: "teu"},
        {id: 58, question: "처", a: "jah", b: "chah", c: "chuh", d: "juh", answer: "chuh"},
        {id: 59, question: "먜", a: "myeh", b: "byeh", c: "dyeh", d: "gyeh", answer: "myeh"},
        {id: 60, question: 'ㅌ', a: "aspirated t", b: 'soft t or d', c: 'soft b or p', d: "aspirated k", answer: 'aspirated t'}
      ]);
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))`
      )
    })
};
