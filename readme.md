# Add Pay API example

How to use the Add Pay API using NodeJS.

To use this you need an AddPay account.

Create token using the `create_token.js` script.

Use the `add-pay.js` module to call the API to create a transaction & customer. 

For the resulting Payment URL returned by `addTransaction` to work a customer needs to be linked to the transaction.

```javascript
const AddPay = require('./add-pay');
const addPay = AddPay({
    token : process.env.TOKEN
});

function createTransaction() {
    let transactionData = {
        "reference": "codex_001",
        "description": "codeX transaction 1",
        "amount": {
            "value": 1275.35,
            "currency_code": "ZAR"
        }
    };
    
    await addPay.createTransaction(transactionData)
}

createTransaction();

```

## The module support these methods

This module is a thin JavaScript layer and only support a few methods from the bigger AddPay API currently.

The methods are:

* getTransactions
* createTransaction
* createCustomer
* getCustomers
* associateTransactionWithCustomer
