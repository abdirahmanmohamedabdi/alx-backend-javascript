function getPaymentTokenFromApi(success) {
    if (success) {
        return new Promise((resolve) => {
            resolve({data: 'Successull response from the Api' })
        });
    }
}

module.exports = getPaymentTokenFromApi;