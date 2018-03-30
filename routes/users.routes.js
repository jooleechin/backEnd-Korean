const router = require('express').Router()
const { usersController } = require('../controllers')

router.get('/', usersController.everything)
router.get('/:id', usersController.one)
router.get('/:id/quiz', usersController.quiz)
// router.post('/', usersController.signup)
//router.put('/:id', usersController.edit)
router.delete('/:id', usersController.erase)
// this and put :id cannot exist. Might need to change that later
router.put('/usersquestions', usersController.markQuestionCorrect)

module.exports = router
