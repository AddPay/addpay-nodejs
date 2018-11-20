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


const customerData = {
    "firstname": "Yegan",
    "lastname": "Meister",
    "email": "yegan@yeganmeister.org",
    "mobile": "27811231234"
};

let createTransactionData = {
    "reference": "codex_001",
    "description": "codeX transaction 1",
    "amount": {
        "value": 1275.35,
        "currency_code": "ZAR"
    }
};



associateTransactionWithCustomer('091ef786-e873-4993-abd6-d3340d3e0164', '2e2bc70a-f78c-45b9-8666-43082ee7a2ee');


