
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Q1vowels').del()
    .then(function () {
      // Inserts seed entries
      return knex('Q1vowels').insert([
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
      ]);
    });
    .then(() => {
      return knex.raw(
        `SELECT setval('Q1vowels_id_seq', (SELECT MAX(id) FROM Q1vowels))`
      )
    })
};
