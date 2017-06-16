const response = (statusCode, body) => ({
  statusCode,
  body,
})

const success = callback => body =>
  callback(null, response(200, JSON.stringify(body)))

const serverError = callback => body =>
  callback(response(500, body))

module.exports = function makeResponse (callback) {
  return {
    success: success(callback),
    serverError: serverError(callback),
  }
}
