const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { usersController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: usersController.getAllUsers
  })
)

module.exports = router