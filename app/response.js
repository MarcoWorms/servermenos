const response = (statusCode, body) => ({
  statusCode,
  body,
})

const success = callback => body =>
  callback(null, response(200, JSON.stringify(body, null, 2)))

const badRequest = callback => body =>
  callback(null, response(400, JSON.stringify(body, null, 2)))

module.exports = function makeResponse (callback) {
  return {
    success: success(callback),
    badRequest: badRequest(callback),
  }
}
