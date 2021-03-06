'use strict';

/* Add the dependencies you're testing */
const Crowdsale = artifacts.require("./Crowdsale.sol");
// YOUR CODE HERE

contract('TestCrowdsale', function(accounts) {
    /* Define your constant variables and instantiate constantly changing 
     * ones
     */
    const exchangeRate = 10;
    const totalSupply = 1000;
    const timeLimit = 0;
    const qtime = 1;
    const owner = accounts[0];
    const buyer1 = accounts[1];
    const buyer2 = accounts[2];


    let crowdsale;
    // YOUR CODE HERE

    /* Do something before every `describe` method */
    beforeEach(async function() {
        // YOUR CODE HERE
        let c = await Crowdsale.new(
            exchangeRate,
            totalSupply,
            timeLimit,
            qtime,
            {from: owner},
            );
        crowdsale = c;
    });

    /* Group test cases together 
     * Make sure to provide descriptive strings for method arguements and
     * assert statements
     */
    describe('Initialization', function() {
        it("TestInit", async function() {
            // YOUR CODE HERE
            let creator = await crowdsale.creator.call();
            let totalRaised = await crowdsale.totalRaised.call();
            let currentBalance = await crowdsale.currentBalence.call();
            let startingTime = await crowdsale.startingTime.call();
            let endingTime = await crowdsale.endingTime.call();
            assert.equal(owner, creator.valueOf(), "no creator");
            assert.equal(0, totalRaised.valueOf(), "initial raise should be 0");
            assert.equal(0, currentBalance.valueOf(), "should have 0 balance to begin with")
            assert.isAtMost(startingTime.valueOf(), endingTime.valueOf(), "ending time should be more than startingTime")
        });
        // YOUR CODE HERE
    });
    /**
    describe('Sale', function() {
        it("TestSaleAfterEnd", async function() {
            // YOUR CODE HERE
            let startTime = await crowdsale.startingTime.call();
            let endTime = await crowdsale.endingTime.call();
            while (endTime <= startTime) {
                endTime = await crowdsale.endingTime.call();
                continue;
            }

            let boolean = await crowdsale.deliver.call({from: buyer1, value: 10});
            assert.equal(false, boolean, "buyer shouldnt be able to buy");
            let tokensold = await crowdsale.totalRaised.call();
            let curBalance = await crowdsale.currentBalance.call();
            assert.equal(tokensold, 0, "different token sold amount");
            assert.equal(curBalance, 0, "different currentBalance");

        });
        
        // YOUR CODE HERE
    });
    */
    

    describe('Your string here', function() {
        // YOUR CODE HERE
    });
});