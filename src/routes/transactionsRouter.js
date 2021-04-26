const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { transactionsController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: transactionsController.getAllTransactions
  })
)

module.exports = router