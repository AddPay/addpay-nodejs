const axios = require('axios');

module.exports = function (params) {
    
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': params.token
        }
    };

    const BASE_URL =  params.base_url || 'https://secure-test.addpay.co.za/v2';

    async function getTransactions() {
        const URL = BASE_URL + '/services?type=transaction';
        axios.get(URL, config)
    }


    async function createTransaction(transactionData) {
        const CREATE_TRANSACTION_URL = BASE_URL + "/transactions/";
        return axios
            .post(CREATE_TRANSACTION_URL, transactionData, config);
    }

    async function createCustomer(customerData) {
        const CREATE_CUSTOMER_URL = BASE_URL + "/customers/";
        return axios
            .post(CREATE_CUSTOMER_URL, customerData, config);
    }

    async function associateTransactionWithCustomer(transationId, customerId) {
        const associateURL = BASE_URL + `/transactions/${transationId}/customers/${customerId}`;
        return axios.put(associateURL, {}, config)
    }

    async function getCustomers () {

    }

    return {
        getTransactions,
        createTransaction,
        createCustomer,
        getCustomers,
        associateTransactionWithCustomer
    }

}