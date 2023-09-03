let assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    // suite level timeout
    // this.timeout(500);

    // beforeEach(function(done){
    // // hook level timeout
    // this.timeout(500);

    // setTimeout(done,3000);
    // })

    let count = 0;

    let a = 10;
    let b = 10;
    
    it('Addition of two numbers', function(done){
        console.log('retry attempt', count);
        count++;
        this.retries(3);
        // test level timeout
        this.timeout(508);
        setTimeout(done, 500);

        let c = a + b;

        assert.equal(c,20);
    });

    it.skip('Subtraction of two numbers', function(){

        let c = a - b;

        assert.equal(c,0);
    });

    it('Multiplication of two numbers', function(/*done*/){

        // setTimeout(done, 3000);

        let c = a * b;

        assert.equal(c,100);
    });

    it('Division of two numbers', function(){
        
        let c = a / b;

        assert.equal(c,1);
    });

    it('This is a test for pending test feature');
})