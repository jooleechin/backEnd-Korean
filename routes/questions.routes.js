const router = require('express').Router()
const { QuestionsController } = require('../controllers')

router.get('/', QuestionsController.everything)
router.get('/:id', QuestionsController.one)

module.exports = router
