const router = require('express').Router()
const { controllerTryCatch } = require('../utils')

router.get(
  '/',
  controllerTryCatch({
    sucessStatusCode: 200,
    errorStatusCode: 500,
    controller: () => 'Hello world'
  })
)

module.exports = router