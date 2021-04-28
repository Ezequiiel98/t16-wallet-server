const router = require('express').Router()
const { controllerTryCatch } = require('../utils')
const { transferencesController } = require('../controllers')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: transferencesController.getAllTransferences
  })
)

module.exports = router