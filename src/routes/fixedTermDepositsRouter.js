const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { fixedTermDepositsController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: fixedTermDepositsController.getAllDeposits
  })
)

module.exports = router