function getPaymentTokenFromApi(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({data: 'Successul response from the API' })
        });
    }
}

module.exports = getPaymentTokenFromApi;