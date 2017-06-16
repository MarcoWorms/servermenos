const Ajv = require('ajv')

const ajv = new Ajv()
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

const { map } = require('ramda')
const makeResponse = require('./response')


module.exports = map(handler => (event, context, callback) => {
  const response = makeResponse(callback)

  const validate = ajv.compile(handler.inputSchema)
  const valid = validate(event.body)

  if (!valid) {
    return response.badRequest(validate.errors)
  }

  return handler.handle(event, context, callback)
})
