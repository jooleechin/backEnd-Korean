const router = require('express').Router()
const { learnController } = require('../controllers')

router.get('/', learnController.everything)
router.get('/:id', learnController.one)

module.exports = router
