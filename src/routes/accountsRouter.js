const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { accountsController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: accountsController.getAllAccounts
  })
)

module.exports = router