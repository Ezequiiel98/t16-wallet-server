const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { currenciesController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: currenciesController.getAllCurrencies
  })
)

module.exports = router