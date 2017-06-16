const addValidation = require('./validate')

const transformTransaction = require('./lambdas/transformTransaction')

const lambdas = {
  transformTransaction,
}

module.exports = addValidation(lambdas)
