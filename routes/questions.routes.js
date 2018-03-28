const router = require('express').Router()
const { questionsController } = require('../controllers')

router.get('/', questionsController.everything)
router.get('/:id', questionsController.one)

module.exports = router
