const makeResponse = require('../response')

module.exports = function hello (event, context, callback) {
  const res = makeResponse(callback)
  res.success({
    message: 'Go Serverless v1.0! Your function executed successfully!',
  })
}
