const makeResponse = require('../response')
const vtexTransaction = require('../schemas/vtexTransaction')

function transformTransaction (event, context, callback) {
  const response = makeResponse(callback)

  response.success({
    message: 'Go Serverless v1.0! Your function executed successfully!',
    event,
  })
}

module.exports = {
  handle: transformTransaction,
  inputSchema: vtexTransaction,
}
