function getPaymentTokenFromApi(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({data: 'Successul response from the Api' })
        });
    }
}

module.exports = getPaymentTokenFromApi;