describe('Mocha Hooks', function(){
    before('Execute before all tests', function(){
        console.log('Execute before all tests');
    });

    beforeEach('Execute before each test', function(){
        console.log('Execute before each test');
    });

    after('Execute after all tests', function(){
        console.log('Execute after all tests')
    });

    afterEach('Execute after each test', function(){
        console.log('Execute after each test');
    });

    it('Mocha hooks test', function(){
        console.log('Mocha - this is a test for Mocha hooks')
    })
})