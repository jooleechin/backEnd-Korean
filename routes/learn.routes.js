const router = require('express').Router()
const { LearnController } = require('../controllers')

router.get('/', LearnController.everything)
router.get('/:id', LearnController.one)

module.exports = router
