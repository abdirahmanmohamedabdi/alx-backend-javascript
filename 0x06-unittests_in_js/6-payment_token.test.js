const getPaymentTokenFromApi = require("./6-payment_token");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("getPaymentTokenFromApi", function() {
    it("Async testing with done callback", function(done) {
        getPaymentTokenFromApi(true)
        .then((data) => {
            expect(data).to.have.property('data');
            done()
        });
    });
});