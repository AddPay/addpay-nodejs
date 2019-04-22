const AddPay = require('./add-pay');
const addPay = AddPay({
    token: process.env.TOKEN
});

async function createTransaction() {
    let transactionData = {
        "reference": "",
        "description": "",
        "amount": {
            "value": 1,
            "currency_code": "ZAR"
        },
        return_url: "",
        notify_url: ""

    };

    let result = await addPay.createTransaction(transactionData)
    let transactionId = result.data.data.id;
    return transactionId;
}

async function createCustomer() {
    let customerData = {
        "firstname": "",
        "lastname": "",
        "email": "",
        "mobile": ""
    };

    let result = await addPay.createCustomer(customerData)
    let customerId = result.data.data.id;
    return customerId;
}

async function associateTransactionWithCustomer(transactionId,customerId){
    let result = await addPay.associateTransactionWithCustomer(transactionId, customerId)
    let associateTransactionWithCustomerId = result.data.data.id;
    return associateTransactionWithCustomerId;
}

async function createContract(loop) {
    let contractData = {
        "reference": "",
        "interval": "MONTH",
        "action_day": 31,
        "mobile": ""
    };

    let result = await addPay.createContract(contractData)
    let contractId = result.data.data.id;
    return contractId;
}

async function associateContractWithTransaction(contractId,transactionId){
    let result = await addPay.associateContractWithTransaction(contractId, transactionId)
    let associateContractWithTransactionId = result.data.data.id;
    return associateContractWithTransactionId;
}

async function createFullContract(){

    let customerId = await createCustomer()
    let transactionId = await createTransaction()
    let associateTransactionWithCustomerId = await associateTransactionWithCustomer(transactionId,customerId);

    let contractId = await createContract(i)
    let associateContractWithTransactionId = await associateContractWithTransaction(contractId,transactionId);
    
    return contractId;
    
}

createFullContract()
.then((result) => console.log(result))
.catch((err) => console.log(err));