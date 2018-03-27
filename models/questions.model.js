const knex = require('../db/knex')
//learning
function getAllVowels() {
  return knex('l1vowels')
}
function getAllConsts() {
  return knex('l2consonants')
}
//end of quiz all questions
function getAllVowelQuests() {
  return knex('q1vowels')
}
function getAllConstQuests() {
  return knex('q2consonants')
}
function getAllComboQuests() {
  return knex('q3combo')
}

function getVowelQuest() {
  return knex('')
}
