
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('q3combo').del()
    .then(function () {
      // Inserts seed entries
      return knex('q3combo').insert([
        {id: 1, question: '가', a: "gah", b: "bah", c: "buh", d: "gyah", answer: "gah"},
        {id: 2, question: '부', a: "bah", b: "boo", c: "suh", d: "peh", answer: "boo"},
        {id: 3, question: '너', a: "teh", b: "goh", c: "nah", d: "nuh", answer: "nuh"},
        {id: 4, question: '미', a: "teh", b: "geu", c: "mee", d: "nee", answer: "mee"},
        {id: 5, question: '하', a: "tah", b: "gah", c: "bah", d: "hah", answer: "hah"},
        {id: 6, question: '도', a: "doh", b: "dah", c: "bah", d: "beh", answer: "doh"},
        {id: 7, question: '차', a: "doh", b: "doo", c: "chah", d: "jah", answer: "chah"},
        {id: 8, question: '봐', a: "bwah", b: "kwah", c: "nwah", d: "hwah", answer: "bwah"},
        {id: 9, question: '로', a: "lah", b: "bah", c: "loh", d: "goh", answer: "loh"},
        {id: 10, question: '리', a: "lee", b: "leu", c: "loh", d: "lah", answer: "lee"},
        {id: 11, question: '데', a: "deh", b: "beh", c: "geh", d: "meh", answer: "deh"},
        {id: 12, question: '빠', a: "sah", b: "ppah", c: "suh", d: "ppuh", answer: "ppah"},
        {id: 13, question: '사', a: "soo", b: "soh", c: "suh", d: "sah", answer: "sah"},
        {id: 14, question: '여', a: "yuh", b: "yah", c: "wah", d: "weh", answer: "yuh"},
        {id: 15, question: '쟈', a: "jwah", b: "jyah", c: "jah", d: "jeh", answer: "jyah"},
        {id: 16, question: "쿼", a: "kwuh", b: "kwah", c: "kwee", d: "kweh", answer: "kwuh"},
        {id: 17, question: "패", a: "pyeh", b: "peh", c: "poh", d: "pah", answer: "peh"},
        {id: 18, question: "트", a: "teu", b: "tee", c: "tyoo", d: "tweh", answer: "teu"},
        {id: 19, question: "처", a: "jah", b: "chah", c: "chuh", d: "juh", answer: "chuh"},
        {id: 20, question: "먜", a: "myeh", b: "byeh", c: "dyeh", d: "gyeh", answer: "myeh"},
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('q3combo_id_seq', (SELECT MAX(id) FROM q3combo))`
      )
    })
};
