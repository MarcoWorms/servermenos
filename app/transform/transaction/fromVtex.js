const { applySpec, prop, pipe, toString, replace } = require('ramda')

module.exports = applySpec({
  amount: pipe(
    prop('value'),
    toString,
    replace('.', '')
  ),

  amount2: vtexTransaction => String(vtexTransaction.value).replace('.', ''),
})
