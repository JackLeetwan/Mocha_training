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

    it('Mocha hooks test1', function(){
        console.log('Mocha - this is a first test for Mocha hooks')
    });

    it('Mocha hooks test2', function(){
        console.log('Mocha - this is a second test for Mocha hooks')
    })
})