const addValidations = require('./validate')

const payments = require('./payments')

const lambdas = {
  payments,
}

module.exports = addValidations(lambdas)
