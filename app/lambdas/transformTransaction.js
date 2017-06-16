const makeResponse = require('../response')
const vtexTransaction = require('../schemas/vtexTransaction')

function transformTransaction (event, context, callback) {
  const response = makeResponse(callback)

  const transaction = event.body

  // pagarmeTransaction = pagarmeSpec(transaction)

  response.success({ transaction })
}

module.exports = {
  handle: transformTransaction,
  inputSchema: vtexTransaction,
}
