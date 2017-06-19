const { payments } = require('..')

const vtexTransaction = {
  "reference": "v32478982vtx-01",
  "transactionId": "D3AA1FC8372E430E8236649DB5EBD08E",
  "paymentId": "F5C1A4E20D3B4E07B7E871F5B5BC9F91",
  "paymentMethod": "Visa",
  "merchantName":  "mystore",
  "card": {
    "number": "4444333322221111",
    "holder": "John Doe",
    "expiration": {
      "month": "06",
      "year": "2025"
    },
    "csc": "021"
  },
  "value": 4307.23,
  "installments": 3,
  "deviceFingerprint": "12ade389087fe",
  "miniCart": {
    "buyer": {
      "id": "c1245228-1c68-11e6-94ac-0afa86a846a5",
      "firstName": "John",
      "lastName": "Doe",
      "document": "012.345.678-90",
      "documentType": "CPF",
      "email": "john@doe.com",
      "phone": "+55 (21) 98765-4321"
    },
    "shippingAddress": {
      "country": "BRA",
      "street": "Rua Praia de Botafogo",
      "number": "518",
      "complement": "2o. andar",
      "neighborhood": "Botafogo",
      "postalCode": "22250-040",
      "city": "Rio de Janeiro",
      "state": "RJ"
    },
    "billingAddress": {
      "country": "BRA",
      "street": "Rua Praia de Botafogo",
      "number": "518",
      "complement": "2o. andar",
      "neighborhood": "Botafogo",
      "postalCode": "22250-040",
      "city": "Rio de Janeiro",
      "state": "RJ"
    },
    "items": {
      "id": "123242",
      "name": "Some useless product",
      "price": 21.98,
      "quantity": 1,
      "discount": 1.00
    },
    "shippingValue": 11.44,
    "taxValue": 10.01
  },
  "url": "https://mystore.ecommerce.com/orders/direct/link/v32478982",
  "callbackUrl": "https://api.vtexpayments.com/some/path/to/retrieve/status"
}

describe('payments', () => {
  it('should receive a vtex transaction, send it to pagarme, and respond with some status', () => {
    const expected = {
      paymentId: 'A5AB331B8CB940769F6ED5614085318B',
      status: 'approved/denied/undefined',
      authorizationId: '141843',
      acquirer: 'Cielo',
      nsu: 'Nsu1234',
      tid: 'Tid1234',
      bankIssueInvoiceUrl: 'https://processor/bankinvoice.pdf/null',
    }
    const callback = (err, response) => {
      expect(response).toMatchObject({
        statusCode: 200,
        body: JSON.stringify(expected, null, 2),
      })
    }
    const event = {
      body: vtexTransaction,
    }

    payments(event, {}, callback)
  })
})
