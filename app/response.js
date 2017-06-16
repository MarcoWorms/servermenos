const response = (statusCode, body) => ({
  statusCode,
  body,
})

const success = callback => body =>
  callback(null, response(200, JSON.stringify(body)))

// There is no error code because it's not integrated
// with API gateway yet
const badRequest = callback => body =>
  callback(JSON.stringify(body))


module.exports = function makeResponse (callback) {
  return {
    success: success(callback),
    badRequest: badRequest(callback),
  }
}
