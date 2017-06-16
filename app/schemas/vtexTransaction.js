module.exports = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "Payment Request",
  "description": "Payload for a Payment Request",
  "type": "object",
  "properties": {
    "reference": {
      "description": "Reference to the order that generated this payment.",
      "type": "string"
    },
    "transactionId": {
      "description": "VTEX PCI Gateway transaction identifier.",
      "type": "string"
    },
    "merchantName": {
      "description": "VTEX PCI Gateway merchant name who originated the payment.",
      "type": "string"
    },
    "paymentId": {
      "description": "VTEX PCI Gateway payment identifier.",
      "type": "string"
    },
    "paymentMethod": {
      "description": "Identifies the payment method used. For example, the brand of the credit card.",
      "type": "string"
    },
    "card": {
      "description": "Credit card data",
        "type": "object",
        "properties": {
          "number": {
            "description": "Number of credit card",
            "type": "string"
          },
          "holder": {
            "description": "Holder of credit card",
            "type": "string"
          },
          "expiration": {
            "description": "Expiration date of credit card",
            "type": "object",
            "properties": {
              "month": {
                "description": "expiration month",
                "type": "string"
              },
              "year": {
                "description": "expiration year",
                "type": "string"
              }
            }
          }
        }
    },
    "value": {
      "description": "Value of payment",
      "type": "number"
    },
    "installments": {
      "description": "Number of payment installments",
      "type": "number"
    },
    "csc": {
      "description": "Card security code of credit card",
      "type": "string"
    },
    "deviceFingerprint": {
      "description": "DeviceFingerprint of this payment",
      "type": "string"
    },
    "billingAddress": {
      "description": "Profile address",
      "type": "object",
      "properties": {
        "country": {
          "type": "string"
        },
        "street":  {
          "type": "string"
        },
        "number":  {
          "type": "string"
        },
        "complement":  {
          "type": "string"
        },
        "neighborhood":  {
          "type": "string"
        },
        "postalCode":  {
          "type": "string"
        },
        "city":  {
          "type": "string"
        },
        "state":  {
          "type": "string"
        }
      }
    },
    "miniCart": {
      "description": "Cart information (Optional, can be sended if you check use antifraud)",
      "type": "object",
      "properties": {
        "buyer" : {
          "description": "Buyer personal information",
          "type": "object",
          "properties": {
            "id": {
              "description": "Buyer unique identifier",
              "type": "string"
            },
            "firstname": {
              "description": "Buyer first name",
              "type": "string"
            },
            "lastname": {
              "description": "Buyer last name",
              "type": "string"
            },
            "document": {
              "description": "Buyer document",
              "type": "string"
            },
            "documentType": {
              "description": "Buyer document type",
              "type": "string"
            },
            "email": {
              "description": "Buyer email",
              "type": "string"
            },
            "phone": {
              "description": "Buyer phone number",
              "type": "string"
            }
          }
        },
        "shippingAddress" : {
          "description": "Buyer address information",
          "type": "object",
          "properties": {
            "country": {
              "type": "string"
            },
            "street":  {
              "type": "string"
            },
            "number":  {
              "type": "string"
            },
            "complement":  {
              "type": "string"
            },
            "neighborhood":  {
              "type": "string"
            },
            "postalCode":  {
              "type": "string"
            },
            "city":  {
              "type": "string"
            },
            "state":  {
              "type": "string"
            }
          }
        },
        "items" : {
          "description": "Cart stock keeping units",
          "type": "object",
          "properties": {
           "id": {
              "type": "string"
            },
            "name":  {
              "type": "string"
            },
            "price":  {
              "type": "number"
            },
            "quantity":  {
              "type": "number"
            },
            "discount":  {
              "type": "number"
            }  
          }
        },
        "shippingValue" : {
          "type": "number",
          "description": "value of the shipping"
        },
        "taxValue" : {
          "type": "number",
          "description": "value of the tax"
        }
      }
    },
    "url" : {
      "type": "string",
      "description": "Direct url of order"
    },
    "callbackUrl": {
      "description": "Endpoint to callback if you not answer in time",
      "type": "string"
    }
  }
}
