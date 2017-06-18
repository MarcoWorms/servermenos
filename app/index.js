const addValidations = require('./validate')

const payments = require('./lambdas/payments')

const lambdas = {
  payments,
}

module.exports = addValidations(lambdas)
