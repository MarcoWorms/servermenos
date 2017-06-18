const makeResponse = require('../response')
const schema = require('../schemas/vtexTransaction')

function transformTransaction (event, context, callback) {
  const response = makeResponse(callback)

  const vtexTransaction = event.body

  // pseudocode of what needs to be done here
  // this is sync but it should be async
  //
  // pagarmeTransaction = fromVtexTransaction(transaction)
  // pagarmeResponse = pagarmeSendTransaction(pagarmeTransaction)
  // vtexReponse = fromPagarmeResponse(pagarmeResponse)

  response.success({
    paymentId: 'A5AB331B8CB940769F6ED5614085318B',
    status: 'approved/denied/undefined',
    authorizationId: '141843',
    acquirer: 'Cielo',
    nsu: 'Nsu1234',
    tid: 'Tid1234',
    code: '200',
    message: 'Custom message from provider',
    bankIssueInvoiceUrl: 'https://processor/bankinvoice.pdf/null',
  })
}

module.exports = {
  handle: transformTransaction,
  inputSchema: schema,
}
