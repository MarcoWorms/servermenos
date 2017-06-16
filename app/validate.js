const Joi = require('joi')
const { map } = require('ramda')
const makeResponse = require('./response')

module.exports = map(handler => (event, context, callback) => {
  const response = makeResponse(callback)

  const validation = Joi.validate(event.body, handler.inputSchema)

  if (validation.error === null) {
    return handler.handle(event, context, callback)
  }

  return response.badRequest(validation)
})
