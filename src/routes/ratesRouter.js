const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { ratesController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: ratesController.getAllRates
  })
)

module.exports = router