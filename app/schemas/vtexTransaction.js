const Joi = require('joi')

const string = () => Joi.string().required()

module.exports = Joi.object().keys({
  paymentId: string(),
  status: string(),
  authorizationId: string(),
  bankInvoiceUrl: string(),
  nsu: string(),
  tid: string(),
  acquirer: string(),
})
