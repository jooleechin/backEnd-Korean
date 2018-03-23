const router = require('express').Router()
const { UsersController } = require('../controllers')

router.get('/', UsersController.everything)
router.get('/:id', UsersController.one)
router.post('/', UsersController.signup)
router.put('/', UsersController.edit)
router.delete('/', UsersController.erase)
