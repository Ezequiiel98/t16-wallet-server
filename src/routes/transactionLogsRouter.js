const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { transactionLogsController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: transactionLogsController.getAllTransactionLogs
  })
)

module.exports = router