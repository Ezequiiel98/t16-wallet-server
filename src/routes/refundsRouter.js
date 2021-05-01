const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { refundsController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: refundsController.getAllRefunds
  })
)

module.exports = router