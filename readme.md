# AddPay NODE.JS REST Client

How to use the AddPay API using NodeJS. To use this you need an AddPay account.

## Create a token

To use this module you will need a TOKEN that is generated from your AddPay Client Id and Client Secret. To create a token do this.

Export your AddPay Client Id and Client Secret as an environment variable.

```
export CLIENT_ID=<YOUR CLIENT ID HERE>
export CLIENT_SECRET=<YOUR CLIENT SECRET HERE>
```

Create the token using the `create_token.js` script.

The generated token will be displayed on the screen. Export the generated token as a environment variable called `TOKEN`

## Create a TOKEN environment variable

Create a TOKEN environment variable using the `export` command like this:

```
export TOKEN='<your token here>'
```

You can see the token value by using `echo`:

```
echo $TOKEN
```

## Use the module

Use the `add-pay.js` module to call the API to create a transaction & customer.

> Note to use the module you will need the **TOKEN** environment variable. 

For the resulting Payment URL returned by `addTransaction` to work a customer needs to be linked to the transaction.

```javascript
const AddPay = require('./add-pay');
const addPay = AddPay({
    token : process.env.TOKEN
});

function createTransaction() {
    let transactionData = {
        "reference": "Test Transaction",
        "description": "Test Transaction",
        "amount": {
            "value": 1,
            "currency_code": "ZAR"
        }
    };
    
    let response = await addPay.createTransaction(transactionData);
    console.log(response);
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
